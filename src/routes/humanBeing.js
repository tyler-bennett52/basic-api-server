'use strict'

const express = require('express');
const { humanBeingModel } = require('../models');
const router = express.Router();

router.get('/human', async (req, res, next) => {
  try {
    const humanBeings = await humanBeingModel.findAll();
    res.status(200).send(humanBeings);
  } catch (error) {
    next(error);
  }
});

router.get('/human/:id', async (req, res, next) => {
  try {
    const humanBeing = await humanBeingModel.findOne({where: {id: req.params.id}});
    res.status(200).send(humanBeing);
  } catch (error) {
    next(error);
  }

})

router.post('/human', async (req, res, next) => {
  try {
    console.log('POST body:', req.body);
    const newHuman = await humanBeingModel.create(req.body);
    res.status(201).send(newHuman);
  } catch (error) {
    next(error);
  }
});

router.put('/human/:id', async (req, res, next) => {
  try {
    console.log('PUT body:', req.body);
    await humanBeingModel.update(req.body, {where: {id: req.params.id}});
    const newHuman = await humanBeingModel.findOne({where: {id: req.params.id}});
    res.status(200).send(newHuman);
  } catch (error) {
    next(error);
  }
});
router.delete('/human/:id', async (req, res, next) => {
  try {
    await humanBeingModel.destroy({where: {id: req.params.id}});
    // await humanBeingModel.findOne({where: {id: req.params.id}});
    res.status(200).send(`Item #${req.params.id} is no more.`);
  } catch (error) {
    next(error);
  }
});


module.exports = router;