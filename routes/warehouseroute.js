const express = require('express');
const router = express.Router();
const warehouseController=require('../controllers/warehouseController')

router.post('/addwarehouse',warehouseController.addWarehouse);

module.exports=router