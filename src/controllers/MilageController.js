const {Milage} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const milage =await Milage.findAll({
        limit:100
      })
      res.send(milage)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const milage = await Milage.findByPk(req.params.milageId)

      res.send(milage)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const milage = await Milage.findByPk(req.params.milageId)
      milage.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const milage =await Milage.create(req.body)
      const milageJson = milage.toJSON()
      res.send({
        milage:milageJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}