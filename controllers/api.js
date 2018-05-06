const Api = require('../models/api')

module.exports = {
  addVehicle: (req,res) => {
    Api.create({
      type: req.body.type,
      image: req.file.cloudStoragePublicUrl,
      weight: req.body.weight,
      order: req.body.order 
    },(err,data)=> {
      if(err){
        return res.status(400).json({
          message: `failed add vehicle ${err}`,
          data: {}
        })
      }else{
        res.status(200).json({
          message: `add vehicle success`,
          data: data
        })
      }
    })
  },
  readVehicle: (req,res) => {
    Api
    .find()
    .exec()
    .then( data => {
      res.status(200).json({
        message: `success show all vechile`,
        data: data
      })
    })
    .catch(err => {
      res.status(400).json({
        message: `cannot find vehicle data ${err}`,
        data: {}
      })
    })
  },

  updateVehicle: (req,res) => {
    const id = req.params.id
    Api
    .update({_id: id}, {$set: req.body})
    .then( data => {
      res.status(201).json({
        message: `success update vehicle data`,
        data: data
      })
    })
    .catch(err => {
      res.status(400).json({
        message: `error update data ${err}`,
        data: {}
      })
    })
  },
  deleteVehicle: (req,res) => {
    let id = req.params.id
    Api
    .findByIdAndRemove(id , (err, data) => {
      if(err) {
        res.status(400).json({
          message: `error delete vehicle data ${err}`,
          data: {}
        })
      }else{
        res.status(200).json({
          message: `success delete vehicle data`,
          data: data
        })
      }
    })
  }
}