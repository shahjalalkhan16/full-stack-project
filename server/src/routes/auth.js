const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userService = require('../services/userServices');
const authRotes = express.Router();


const secret = process.env.JWT_SECRET;

authRotes.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userService.getUserByUserNameOrEmail({ username })
    if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ message: 'Wrong paassword' });

    }
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' })
    res.json({ token });
});


module.exports = authRotes;
