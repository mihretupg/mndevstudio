$backendDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectDir = Split-Path -Parent $backendDir
$python = Join-Path $backendDir '.venv\Scripts\python.exe'
$server = Join-Path $backendDir 'contact_server.py'

Set-Location $projectDir
& $python $server
