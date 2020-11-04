const path = require('path')
const express = require('express');
const app = express();

app.use(express.json())

app.all('/api', (req, res) => {
  const query = req.query;
  const body = req.body;

  console.log(req.url + '\n', {
    method: req.method,
    query,
    body,
  }, '\n')

  res.json({
    method: req.method,
    query,
    body,
  });
});

app.get('/ky.umd.js', (req, res) => {
  res.set({ 'Cache-Control': 'no-cache, no-store' });
  res.sendFile(path.join(__dirname, '..', 'node_modules', 'ky', 'umd.js'));
});

app.get('/', (req, res) => {
  res.set({ 'Cache-Control': 'no-cache, no-store' });
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
