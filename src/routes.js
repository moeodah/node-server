const AuthenticationController = require('./controllers/AuthenticationController')
const EmployeeController = require('./controllers/EmployeeController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register' ,
    AuthenticationControllerPolicy.register,
    AuthenticationController.register) 

    app.post('/login',
    AuthenticationController.login)

    app.post('/employees',
    EmployeeController.post)

    app.get('/employees',
    EmployeeController.index)

    app.get('/employees/:employeeId',
    EmployeeController.show)

    app.delete('/employees/:employeeId',
    EmployeeController.kill)

    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../beesys/build/index.html'));
      });
}



