const {existsSync} = require('node:fs')
const {spawnSync} = require('node:child_process')
const {join} = require('node:path')

const pythonPath = join(__dirname, '.venv', 'Scripts', 'python.exe')
const testPath = join(__dirname, 'test_contact_email.py')

if (!existsSync(pythonPath)) {
  console.error('Backend virtual environment not found.')
  console.error('Run: npm run backend:install')
  process.exit(1)
}

const result = spawnSync(pythonPath, [testPath], {stdio: 'inherit'})
process.exit(result.status ?? 1)
