const {Car} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const car =await Car.findAll({
        limit:100
      })
      res.send(car)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const car = await Car.findByPk(req.params.carId)

      res.send(car)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const car = await Car.findByPk(req.params.carId)
      car.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const car =await Car.create(req.body)
      const carJson = car.toJSON()
      res.send({
        car:carJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  },
  async put (req, res) {
    try {
      await Car.update(req.body, {
        where: {
          id: req.params.carId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the Car'
      })
    }
  },
}