const express = require('express');
const { DataModel } = require('../model/data.model');

const dataRouter = express.Router();

dataRouter.post('/add', async (req, res) => {
    try {
        const user = new DataModel(req.body);
        await user.save();
        res.status(200).json({ msg: 'A new data is Added to DB' });

    } catch (err) {
        res.status(400).json({ err: err.message });
    }
})
dataRouter.get('/', async (req, res) => {
    const query = req.query;
    try {
        const users = await DataModel.find(query);
        res.status(200).send(users);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
})

dataRouter.delete('/delete/:dataId', async (req, res) => {
    const { dataId } = req.params;
    try {
        await DataModel.findByIdAndDelete({ _id: dataId });
        res.status(200).json({ msg: "The user has been delelted" });

    } catch (err) {
        res.status(400).json({ err: err.message });
    }
})

dataRouter.patch('/update/:dataId', async (req, res) => {
    const { dataId } = req.params;
    const payload = req.body;
    try {
        await DataModel.findByIdAndUpdate({ _id: dataId }, payload);
        res.status(200).json({ msg: "data has been updated" });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }

})

module.exports = {
    dataRouter
}