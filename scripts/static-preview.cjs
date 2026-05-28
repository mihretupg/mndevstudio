const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..', 'dist')
const port = 4173

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0])
  const filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath)
  const safePath = filePath.startsWith(root) ? filePath : path.join(root, 'index.html')

  fs.readFile(safePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(root, 'index.html'), (indexErr, indexData) => {
        if (indexErr) {
          res.writeHead(404)
          res.end('Not found')
          return
        }
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(indexData)
      })
      return
    }

    res.writeHead(200, {'Content-Type': types[path.extname(safePath)] || 'application/octet-stream'})
    res.end(data)
  })
}).listen(port, '127.0.0.1', () => {
  console.log(`Static preview running at http://127.0.0.1:${port}`)
})
