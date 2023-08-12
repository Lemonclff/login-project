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
  database: "loginsystem",
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
  const values =
    [
      req.body.userName,
      req.body.userPassword,
      req.body.userEmail
    ]

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("done");
  });
});


app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;
  const q = "SELECT * FROM users WHERE userName = ? AND userPassword = ?";
  db.query(q, [userName, userPassword], (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong combination!" });
      }
    }
  });
});

// app.post("/login", (req, res) => {
//   const userName = req.body.userName;
//   const userPassword = req.body.userPassword;
//   const q = "SELECT * FROM users WHERE userName = ? AND userPassword = ?";
//   db.query(q, [userName, userPassword], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//     } else {
//       if (result.length > 0) {
//         const userId = result[0].id;
//         const expiration = new Date();
//         expiration.setHours(expiration.getHours() + 1); // Set expiration to 1 hour from now
//         const insertQuery = "INSERT INTO sessions (id, expiration) VALUES (?, ?)";
//         db.query(insertQuery, [userId, expiration], (insertErr) => {
//           if (insertErr) {
//             return res.json(insertErr);
//           }
//           res.send(result);
//         });
//       } else {
//         res.send({ message: "Wrong combination!" });
//       }
//     }
//   });
// });

// app.get("/checkLoginStatus", (req, res) => {
//   const id = req.headers.id; // Assuming you pass the user ID in the headers
//   const query = "SELECT * FROM sessions WHERE id = ? AND expiration > NOW()";
//   db.query(query, [id], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }

//     if (result.length > 0) {
//       // User is logged in
//       res.json({ loggedIn: true });
//     } else {
//       // User is not logged in
//       res.json({ loggedIn: false });
//     }
//   });
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});