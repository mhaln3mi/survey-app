const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Add this line

// Create SQLite database and table
const db = new sqlite3.Database('./survey.db');
db.run(`
  CREATE TABLE IF NOT EXISTS survey_responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    contact TEXT,
    profession TEXT,
    interest TEXT,
    reference TEXT
  )
`);

app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
  const data = req.body;

  db.run(
    'INSERT INTO survey_responses (name, email, contact, profession, interest, reference) VALUES (?, ?, ?, ?, ?, ?)',
    [data.name, data.email, data.contact, data.profession, data.interest, data.reference],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save data to the database' });
      }

      res.json({ success: true });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
