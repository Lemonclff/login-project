import express from 'express';
import mysql from 'mysql';
const app = express();


const PORT = 8000;
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Lemonclf0428!",
    database: "login_system",
});

app.get("/", (req, res) => {
    res.json("hello")
})

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});