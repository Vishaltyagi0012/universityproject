




import express from 'express';
import cors from 'cors';
import '../backend/db/config.js';
import users from '../backend/db/users.js';
import contact from '../backend/db/contact.js';
import Jwt from 'jsonwebtoken';
const jwtkey = 'univer';

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let User = new users(req.body);
    let result = await User.save();
    result = result.toObject();
    delete result.password

    Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: 'something went wrong, Please try after sometime' })
        }
        resp.send({ result, auth: token })
    })
})

app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await users.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: 'something went wrong, Please try after sometime' })
                }
                resp.send({ user, auth: token })
            })

        } else {
            resp.send({ result: 'NO user found' })
        }
    } else {
        resp.send({ result: 'NO user found' })
    }
})

app.post("/contact", verifyToken, async (req, resp) => {
    let contacts = new contact(req.body);
    let result = await contacts.save();

    Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: 'something went wrong, Please try after sometime' })
        }
        resp.send({ result, auth: token })
    })
})

function verifyToken(req, resp, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split('')[1];

        Jwt.verify(token, jwtkey, (err, valid) => {
            if (err) {
                resp.send({ result: "Please provide valid token " })
            } else {
                next();
            }
        })

    } else {
        resp.send({ result: "Please add token with header" })
    }


}
app.listen(5000);
