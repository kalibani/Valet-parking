var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */


router.get('/', (req, res) =>{
  models.Transaksi.findAll({include: [{model: models.Driver, model: models.Parking_spot}],
    attributes: ['no_plat','total_harga','durasi','jam_masuk','jam_keluar']
  })
  .then(transaksi =>{
    models.Driver.findAll({attributes: ['id','nama']})
    .then(drivers=>{
      models.Parking_spot.findAll({attributes: ['id','spot_name', 'spot_status']})
      .then(parkiran=>{
        //res.send(transaksi);
        // console.log('------', transaksi[1].Parking_spot.spot_name)
        res.render('transaksi', {dataDriver: drivers, dataParkiran: parkiran, dataTransaksi: transaksi})
      })
    })
  })
  .catch(err =>{
    console.log(err);
  })
})

module.exports = router;
