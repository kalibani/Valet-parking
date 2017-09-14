var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */


router.get('/', (req, res) =>{
  models.Transaksi.findAll({include: [{model: models.Driver, model: models.Parking_spot}],
    attributes: ['id','no_plat', 'DriverId','ParkingSpotId','jam_masuk']
  })
  .then(rows =>{
    res.send(rows)
    //res.render('drivers', {data: rows})
  })
  .catch(err =>{
    //res.send(err)
    console.log(err);
  })
})


router.get('/add', (req, res) => {
  models.Driver.findAll({attributes: ['id','nama']})
  .then(rows=>{
    models.Parking_spot.findAll({
      attributes: ['id','spot_name', 'spot_status']
    })
    .then(rows2=>{
      res.send({data: rows, data2: rows2})
    })
  })
})

router.post('/add', (req, res) => {
  models.Transaksi.build({
      no_plat: req.body.no_plat,
      DriverId: req.body.DriverId,
      ParkingSpotId: req.body.ParkingSpotId,
      jam_masuk: new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
  })
  .save()
  .then(rows => {
    res.redirect('/parkir')
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/edit/:id', function(req,res) {
  models.Transaksi.findAll({
    where: { id: req.params.id}
  })
  .then(rows => {
    models.Driver.findAll()
    .then(rows2 => {
      models.Parking_spot.findAll()
      .then(rows3 =>{
        res.send({data: rows, data2: rows2, data3: rows3})
      })
    })
  })
})

router.post('/edit/:id', function(req,res) {
  models.Teacher.update(
    {
      no_plat: req.body.no_plat,
      DriverId: req.body.DriverId,
      ParkingSpotId: req.body.ParkingSpotId,
    },
    {
      where: { id: req.params.id}
    }
  )
  .then(rows =>
    res.redirect('/parkir')
  )
})


module.exports = router;
