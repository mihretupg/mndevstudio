from contact_server import app


payload = {
  'name': 'MN Dev Studio Test',
  'email': 'test@example.com',
  'company': 'Backend smoke test',
  'service': 'Backend API',
  'message': 'This is a test message from the React contact form payload shape.'
}


with app.test_client() as client:
  response = client.post('/api/contact', json=payload)

print(f'Status: {response.status_code}')
print(response.get_data(as_text=True))

if response.status_code != 200:
  raise SystemExit(1)
