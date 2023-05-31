const express = require('express');
const { UserModel } = require('../model/user.model');
const { registerCheck } = require('../Middleware/registercheck.middleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();

userRouter.post('/register', registerCheck, async (req, res) => {
    try {
        const { name, pass, email, age } = req.body;
        // const existingUser = users.find((user) => user.email === email);
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'A user with the same email already exists' });
        }
        else {
            bcrypt.hash(pass, 5, async (err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    res.send(400).json({ err: err.message });
                }
                else {
                    const user = new UserModel({ name, email, age, pass: hash });
                    await user.save();
                    res.status(200).json({ msg: 'New user has been updated', updatedUser: req.body });
                }
            });
        }


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

userRouter.post('/login', async (req, res) => {
    const { name, pass, email, city, age } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        bcrypt.compare(pass, user.pass, (err, result) => {
            // result == true
            const token = jwt.sign({ course: 'mern' }, 'masai', {
                expiresIn: '7d'
            });
            if (result) {
                res.status(200).json({ msg: "Login Successful!!", token: token });
            }
            else {
                res.status(200).json({ msg: "Wrong Crendintial" });
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


module.exports = { userRouter }