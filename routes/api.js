const express = require('express');
const router = express.Router();
const {addVehicle,readVehicle,updateVehicle,deleteVehicle} = require('../controllers/api')
const {sendUploadToGCS} = require('../middleware/uploadGCS') 
const multer = require('multer')

const upload = multer({
   storage  : multer.memoryStorage(),
   limits   : {
     fileSize: 10*1024*1024
  } 
 })

router.get('/',readVehicle)
router.post('/',upload.single('image'),sendUploadToGCS,addVehicle)
router.put('/:id',updateVehicle)
router.delete('/:id',deleteVehicle)

module.exports = router