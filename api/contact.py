import json
import os
import smtplib
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler


REQUIRED_FIELDS = ('name', 'email', 'service', 'message')


def build_email(data):
  gmail_user = os.environ.get('GMAIL_USER')
  receiver_email = os.environ.get('RECEIVER_EMAIL', gmail_user)

  message = EmailMessage()
  message['Subject'] = f"New project request from {data['name']}"
  message['From'] = gmail_user
  message['To'] = receiver_email
  message['Reply-To'] = data['email']

  company = data.get('company') or 'Not provided'
  message.set_content(
    '\n'.join([
      'New project request',
      '',
      f"Name: {data['name']}",
      f"Email: {data['email']}",
      f"Company: {company}",
      f"Service: {data['service']}",
      '',
      'Message:',
      data['message']
    ])
  )
  return message


def send_email(data):
  gmail_user = os.environ.get('GMAIL_USER')
  gmail_app_password = os.environ.get('GMAIL_APP_PASSWORD')

  if not gmail_user or not gmail_app_password:
    raise RuntimeError('GMAIL_USER and GMAIL_APP_PASSWORD must be set')

  with smtplib.SMTP('smtp.gmail.com', 587, timeout=20) as smtp:
    smtp.starttls()
    smtp.login(gmail_user, gmail_app_password)
    smtp.send_message(build_email(data))


class handler(BaseHTTPRequestHandler):
  def send_json(self, status, payload):
    body = json.dumps(payload).encode('utf-8')
    self.send_response(status)
    self.send_header('Content-Type', 'application/json')
    self.send_header('Content-Length', str(len(body)))
    self.send_header('Access-Control-Allow-Origin', os.environ.get('CONTACT_ALLOWED_ORIGIN', '*'))
    self.send_header('Access-Control-Allow-Headers', 'Content-Type')
    self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
    self.end_headers()
    self.wfile.write(body)

  def do_OPTIONS(self):
    self.send_json(204, {})

  def do_POST(self):
    try:
      content_length = int(self.headers.get('Content-Length', '0'))
      data = json.loads(self.rfile.read(content_length).decode('utf-8'))
    except (json.JSONDecodeError, ValueError):
      self.send_json(400, {'error': 'Invalid JSON'})
      return

    clean_data = {key: str(value).strip() for key, value in data.items()}
    missing = [field for field in REQUIRED_FIELDS if not clean_data.get(field)]

    if missing:
      self.send_json(400, {'error': f"Missing required fields: {', '.join(missing)}"})
      return

    try:
      send_email(clean_data)
    except Exception as error:
      print(f'Contact email failed: {error}')
      self.send_json(500, {'error': 'Email delivery failed'})
      return

    self.send_json(200, {'ok': True})
