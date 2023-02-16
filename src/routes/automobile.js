'use strict'

const express = require('express');
const { automobileModel } = require('../models');
const router = express.Router();

router.get('/vehicle', async (req, res, next) => {
  try {
    const humanBeings = await automobileModel.findAll();
    res.status(200).send(humanBeings);
  } catch (error) {
    next(error);
  }
});

router.get('/vehicle/:id', async (req, res, next) => {
  try {
    const humanBeing = await automobileModel.findOne({where: {id: req.params.id}});
    res.status(200).send(humanBeing);
  } catch (error) {
    next(error);
  }

})

router.post('/vehicle', async (req, res, next) => {
  try {
    console.log('POST body:', req.body);
    const newHuman = await automobileModel.create(req.body);
    res.status(201).send(newHuman);
  } catch (error) {
    next(error);
  }
});

router.put('/vehicle/:id', async (req, res, next) => {
  try {
    console.log('PUT body:', req.body);
    await automobileModel.update(req.body, {where: {id: req.params.id}});
    const newHuman = await automobileModel.findOne({where: {id: req.params.id}});
    res.status(200).send(newHuman);
  } catch (error) {
    next(error);
  }
});
router.delete('/vehicle/:id', async (req, res, next) => {
  try {
    await automobileModel.destroy({where: {id: req.params.id}});
    await automobileModel.findOne({where: {id: req.params.id}});
    res.status(200).send(`Item #${req.params.id} is no more.`);
  } catch (error) {
    next(error);
  }
});


module.exports = router;