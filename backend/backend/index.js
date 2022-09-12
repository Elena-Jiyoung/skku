const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:  'password',
    database: 'mydb'

});

app.post('/board/Newpost', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;

    //console.log(category)

    if (category === 'announcement') {
        db.query('INSERT INTO mydb.announcement (title, content, category) VALUES (?,?,?)',
        [title, content, category],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('New Post Inserted');
            }
        })
    } else if (category === 'report') {
        db.query('INSERT INTO mydb.report (title, content, category) VALUES (?,?,?)',
        [title, content, category],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('New Post Inserted');
            }
        })
    } else if (category === 'reference') {
        db.query('INSERT INTO mydb.reference (title, content, category) VALUES (?,?,?)',
        [title, content, category],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('New Post Inserted');
            }
        })
    }
    
});

app.get("/board/announcement", (req, res) => {
    db.query("SELECT * FROM mydb.announcement", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.get("/board/report", (req, res) => {
    db.query("SELECT * FROM mydb.report", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/board/reference", (req, res) => {
    db.query("SELECT * FROM mydb.reference", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
})