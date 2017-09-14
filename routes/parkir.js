var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */


// router.get('/add', function(req, res) {
//   res.render('add_parkir');
// });
//
//
// router.get('/spotkosong', function(req, res) {
//   res.render('spotkosong');
// });


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

  // models.Transaksi.findAll()
  // .then(function(transactions) {
  //   res.send(transactions)
  // })
})

// router.get('/add', (req, res) => {
//   models.Driver.findAll()
//   .then(()=>{
//     //res.send(rows)
//     res.render('add_drivers')
//   })
// })


router.post('/add', (req, res) => {
  models.Transaksi.build({
      no_plat: req.body.no_plat,
      id_driver: req.body.id_driver,
      id_spot: req.body.id_spot,
      jam_masuk: new Date(),
  })
  .save()
  .then(rows => {
    res.redirect('/drivers')
  })
  .catch(err =>{
    res.send(err)
  })
})

// router.get('/delete/:id', (req,res) => {
//   models.Driver.destroy({
//     where: {id:req.params.id}
//   })
//   .then(rows=> {
//     res.redirect('/drivers')
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })
//
// router.get('/edit/:id', function(req,res) {
//   models.Driver.findById(req.params.id)
//   .then(rows => {
//       res.send(rows)
//       //console.log({rows, rows2});
//       //res.render('edit_drivers', {data: rows})
//   })
// })
//
// router.post('/edit/:id', function(req,res) {
//   models.Driver.update(
//     {
//       nama: req.body.nama,
//       telp: req.body.telp,
//       no_plat: req.body.no_plat
//     },
//     {
//       where: { id: req.params.id}
//     }
//   )
//   .then(rows =>
//     res.redirect('/drivers')
//   )
// })


module.exports = router;
