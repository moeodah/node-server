const {Employee} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const employee =await Employee.findAll({
        limit:100
      })
      res.send(employee)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const employee = await Employee.findByPk(req.params.employeeId)

      res.send(employee)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const employee = await Employee.findByPk(req.params.employeeId)
      employee.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const employee =await Employee.create(req.body)
      const employeeJson = employee.toJSON()
      res.send({
        employee:employeeJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}