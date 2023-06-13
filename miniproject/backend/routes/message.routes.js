const express = require('express');
const { MessageModel } = require('../model/message.model');
//const { Mess } = require('../model/posts.model');

const messageRoutes = express.Router();


messageRoutes.post('/add', async (req, res) => {
    try {
        const note = new MessageModel(req.body)
        await note.save();
        res.json({ msg: 'New note has added ', note: req.body });
    } catch (error) {
        res.json({ error: error.message });
    }
})

messageRoutes.get('/', async (req, res) => {
    try {
        let note = await MessageModel.find();
        res.send(note);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = {messageRoutes}