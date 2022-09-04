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
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
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
    app.get('/', (req,res) => {
      res.sendFile(path.join(__dirname, '../beesys/build/index.html'));
    });
}



