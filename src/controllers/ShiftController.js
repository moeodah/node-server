const {Shift} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const shift =await Shift.findAll({
        limit:100
      })
      res.send(shift)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const shift = await Shift.findByPk(req.params.shiftId)

      res.send(shift)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const shift = await Shift.findByPk(req.params.shiftId)
      shift.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const shift =await Shift.create(req.body)
      const shiftJson = shift.toJSON()
      res.send({
        shift:shiftJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}