const models = require('../models');
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/trainings', function(req, res) {
  models.Training.findAll()

      .then(function(trainings) {
      res.json(trainings);
    });
  })


router.get('/trainings/:id', (req, res, next) => {
    const id = req.params.id
    models.Training.findById(id)
      .then((training) => {
        if (!training) { return next() }
        res.json(training)
      })
      .catch((error) => next(error))
  })
  .post('/trainings', upload.single('training'), (req, res, next) => {
      const newTraining = req.body
      models.Training.create(newTraining)
        .then((training) => {
          res.json(training)

        })
        .catch((error) => next(error))
  })


module.exports = router;
