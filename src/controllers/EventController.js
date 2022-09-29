const {Event} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const event =await Event.findAll({
        limit:100
      })
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const event = await Event.findByPk(req.params.eventId)

      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const event = await Event.findByPk(req.params.eventId)
      event.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const event =await Event.create(req.body)
      const eventJson = event.toJSON()
      res.send({
        event:eventJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}