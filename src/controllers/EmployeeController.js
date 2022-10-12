const {Employee} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

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
        error: 'an error has occured trying to show the employee'
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
        employee:employeeJson,
        token: jwtSignUser(employeeJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  },
  async put (req, res) {
    try {
      await Employee.update(req.body, {
        where: {
          id: req.params.employeeId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  },
}