var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */



router.get('/', (req, res) =>{
  models.Transaksi.findAll({include: [{model: models.Driver, model: models.Parking_spot}],
    attributes: ['id','no_plat', 'DriverId','ParkingSpotId','jam_masuk','jam_keluar']
  })
  .then(transaksi =>{
    models.Driver.findAll({attributes: ['id','nama']})
    .then(drivers=>{
      models.Parking_spot.findAll({where: {spot_status:'kosong'}})
      .then(parkiran=>{
         //res.send(parkiran);
        // console.log('------', transaksi[1].Parking_spot.spot_name)
        res.render('parkir', {dataDriver: drivers, dataParkiran: parkiran, dataTransaksi: transaksi})
      })
    })
  })
  .catch(err =>{
    console.log(err);
  })
})


router.post('/', (req, res) => {
  models.Transaksi.build({
      no_plat: req.body.no_plat,
      DriverId: req.body.DriverId,
      ParkingSpotId: req.body.ParkingSpotId,
      jam_masuk: new Date(),
      createdAt : new Date()
      // updatedAt : new Date()
  })
  .save()
  .then(rows => {
    // res.send(rows)
    res.redirect('parkir')
  })
  .catch(err =>{
    res.send(err)
  })
})


router.get('/delete/:id', (req,res) => {
  models.Transaksi.destroy({
    where: {id:req.params.id}
  })
  .then(rows=> {
    res.redirect('/parkir')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', function(req, res) {
  models.Transaksi.findById(req.params.id, {
    include: ['Driver', 'Parking_spot'],
  })
  .then(rows=> {
    res.render('edit_parkir', {data: rows})
  })
  .catch(err => {
    res.send(err)
  })
});

router.post('/edit/:id', function(req,res) {
  // res.send(req.body.spot_name)
  models.Transaksi.update(
    {
      no_plat: req.body.no_plat,
      DriverId: req.body.DriverId,
      spot_name: req.body.spot_name,
      jam_keluar: new Date()
    },
    {
      where: { DriverId: req.params.id}
    }
  )
  .then(rows => {
    console.log(rows);
    res.redirect('/parkir')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
