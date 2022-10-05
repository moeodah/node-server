const AuthenticationController = require('./controllers/AuthenticationController')
const EmployeeController = require('./controllers/EmployeeController')
const ShiftController = require('./controllers/ShiftController')
const CarController = require('./controllers/CarController')
const InfluencerController = require('./controllers/InfluencerController')
const ProductController = require('./controllers/ProductController')
const ApplicationController = require('./controllers/ApplicationController')
const MemoController = require('./controllers/MemoController')
const ContractController = require('./controllers/ContractController')
const EventController = require('./controllers/EventController')
const MilageController = require('./controllers/MilageController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UploadsController = require('./controllers/UploadsController')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const express = require('express')
const stream = require('stream')

module.exports = (app) => {
    app.post('/register' ,
    AuthenticationControllerPolicy.register,
    AuthenticationController.register) 

    app.post('/login',
    AuthenticationController.login)

    app.get('/login',
    AuthenticationController.index)
    // employees //
    app.post('/employees',
    EmployeeController.post)

    app.get('/employees',
    EmployeeController.index)

    app.get('/employees/:employeeId',
    EmployeeController.show)

    app.delete('/employees/:employeeId',
    EmployeeController.kill)

    // shifts //

    app.post('/shifts',
    ShiftController.post)

    app.get('/shifts',
    ShiftController.index)

    app.get('/shifts/:shiftId',
    ShiftController.show)

    app.delete('/shifts/:shiftId',
    ShiftController.kill)

    // Cars //

    app.post('/cars',
    CarController.post)

    app.get('/cars',
    CarController.index)

    app.get('/cars/:carId',
    CarController.show)

    app.delete('/cars/:carId',
    CarController.kill)

    // Influencers //

    app.post('/influencers',
    InfluencerController.post)

    app.get('/influencers',
    InfluencerController.index)

    app.get('/influencers/:influencerId',
    InfluencerController.show)

    app.delete('/influencers/:influencerId',
    InfluencerController.kill)


    // Products//

    
    app.post('/products',
    ProductController.post)

    app.get('/products',
    ProductController.index)

    app.get('/products/:productId',
    ProductController.show)

    app.delete('/products/:productId',
    ProductController.kill)

    // Applications //

    app.post('/applications',
    ApplicationController.post)

    app.get('/applications',
    ApplicationController.index)

    app.get('/applications/:applicationId',
    ApplicationController.show)

    app.delete('/applications/:applicationId',
    ApplicationController.kill)

    app.put('/applications/:applicationId',
    ApplicationController.put)


    // Memos //

    app.post('/memos',
    MemoController.post)

    app.get('/memos',
    MemoController.index)

    app.get('/memos/:memoId',
    MemoController.show)

    app.delete('/memos/:memoId',
    MemoController.kill)

    // app.put('/memos/:memoId',
    // MemoController.put)

    //  contracts //

    
    app.post('/contracts',
    ContractController.post)

    app.get('/contracts',
    ContractController.index)

    app.get('/contracts/:contractId',
    ContractController.show)

    app.delete('/contracts/:contractId',
    ContractController.kill)

    //  Events //

    app.post('/events',
    EventController.post)

    app.get('/events',
    EventController.index)

    app.get('/events/:eventId',
    EventController.show)

    app.delete('/events/:eventId',
    EventController.kill)


    // Milages //

    app.post('/Milages',
    MilageController.post)

    app.get('/Milages',
    MilageController.index)

    app.get('/Milages/:milageId',
    MilageController.show)

    app.delete('/Milages/:milageId',
    MilageController.kill)

    //---------------//

    //   uploads  //

    app.use('/static',express.static(path.join(__dirname,"static")))

    const storage = multer.diskStorage({
      destination: './uploads/',
      filename: function (req, file, cb) {
        console.log(file)
        cb(null,file.originalname)
      }
    })
    const upload = multer ({storage:storage})
    app.post('/Uploads',upload.single('file'),async (req, res) => {
      try {
        console.log(req.body.Name)
        res.send({
          file: req.file
        })
      } catch (err) {
        res.status(500).send({
          error: 'WRONG'
        })
      }
    })
  
    
    app.get('/Uploads/:uploadFile', async (req,res) => {
      const r = fs.createReadStream(`uploads/${req.params.uploadFile}`) // or any other way to get a readable stream
      console.log('----------------------',req.params.uploadFile)
      const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
      stream.pipeline(
      r,
      ps, // <---- this makes a trick with stream error handling
      (err) => {
        if (err) {
          console.log(err) // No such file or any other kind of error
          return res.sendStatus(400); 
        }
      })
      ps.pipe(res) // <---- this makes a trick with stream error handling

    })

    app.get('/', (req,res) => {
      res.sendFile(path.join(__dirname, '../beesys/build/index.html'));
    });
}



