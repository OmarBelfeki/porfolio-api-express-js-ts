const express = require('express');
const app = express();
const port = 3000;
const data = require('./data');

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => res.send('Welcome to my portfolio API!'));
app.get('/api/bio', (req, res) => res.json(data.bio));
app.get('/api/skills', (req, res) => res.json(data.skills));
app.get('/api/projects', (req, res) => res.json(data.projects));
app.get('/api/contact', (req, res) => res.json(data.contact));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
