import express from 'express';
import mysql from 'mysql';
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors())

const PORT = 8000;
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Lemonclf0428!",
    database: "login_system",
});

app.get("/", (req, res) => {
    res.json("hello");
});

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/users", (req, res) => {
    const q = "INSERT INTO users (`userName`, `userPassword`, `userEmail`) VALUES (?,?,?)";
    const values = [
        req.body.userName,
        req.body.userPassword,
        req.body.userEmail,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("done");
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});