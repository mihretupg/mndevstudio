import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv
from flask import Flask, jsonify, request


load_dotenv()
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'), override=False)

app = Flask(__name__)

HOST = os.environ.get('CONTACT_BACKEND_HOST', '127.0.0.1')
PORT = int(os.environ.get('CONTACT_BACKEND_PORT', '8787'))
GMAIL_USER = os.environ.get('GMAIL_USER')
GMAIL_APP_PASSWORD = os.environ.get('GMAIL_APP_PASSWORD')
RECEIVER_EMAIL = os.environ.get('RECEIVER_EMAIL', 'mihretupg@gmail.com')
ALLOWED_ORIGIN = os.environ.get('CONTACT_ALLOWED_ORIGIN', '*')
REQUIRED_FIELDS = ('name', 'email', 'service', 'message')


@app.after_request
def add_cors_headers(response):
  response.headers['Access-Control-Allow-Origin'] = ALLOWED_ORIGIN
  response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
  response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
  return response


def build_email(data):
  message = EmailMessage()
  message['Subject'] = f"New project request from {data['name']}"
  message['From'] = GMAIL_USER
  message['To'] = RECEIVER_EMAIL
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
  if not GMAIL_USER or not GMAIL_APP_PASSWORD:
    raise RuntimeError('GMAIL_USER and GMAIL_APP_PASSWORD must be set')

  with smtplib.SMTP('smtp.gmail.com', 587, timeout=20) as smtp:
    smtp.starttls()
    smtp.login(GMAIL_USER, GMAIL_APP_PASSWORD)
    smtp.send_message(build_email(data))


@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def contact():
  if request.method == 'OPTIONS':
    return ('', 204)

  data = request.get_json(silent=True) or {}
  clean_data = {key: str(value).strip() for key, value in data.items()}
  missing = [field for field in REQUIRED_FIELDS if not clean_data.get(field)]

  if missing:
    return jsonify({'error': f"Missing required fields: {', '.join(missing)}"}), 400

  try:
    send_email(clean_data)
  except Exception as error:
    print(f'Contact email failed: {error}')
    return jsonify({'error': 'Email delivery failed'}), 500

  return jsonify({'ok': True})


if __name__ == '__main__':
  app.run(host=HOST, port=PORT)
