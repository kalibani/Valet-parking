const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) =>{
  models.Driver.findAll({
    attributes: ['id','nama', 'telp','no_plat']
  })
  .then(rows =>{
    //res.send(rows)
    res.render('drivers', {data: rows})
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  models.Driver.findAll()
  .then(rows=>{
    res.send(rows)
    //res.render('add_drivers', {data: rows})
  })
})


router.post('/add', (req, res) => {
  models.Driver.build({
      nama: req.body.nama,
      telp : req.body.telp,
      createdAt : new Date(),
      updatedAt : new Date(),
      id_car : req.body.id_car
  })
  .save()
  .then(rows => {
    res.redirect('/drivers')
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/delete/:id', (req,res) => {
  models.Driver.destroy({
    where: {id:req.params.id}
  })
  .then(rows=> {
    res.redirect('/drivers')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  models.Driver.findById(req.params.id)
  .then(rows => {
    models.Car.findAll().then(rows2 => {
      //res.send({rows, rows2})
      console.log({rows, rows2});
      // res.render('teacher_edit', {data: rows, data2: rows2})
    })
  })
})

router.post('/edit/:id', function(req,res) {
  models.Driver.update(
    {
      nama: req.body.nama,
      telp: req.body.telp,
      id_car: req.body.id_car
    },
    {
      where: { id: req.params.id}
    }
  )
  .then(rows =>
    res.redirect('/drivers')
  )
})

module.exports = router
