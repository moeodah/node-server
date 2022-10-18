const {Influencer} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const influencer =await Influencer.findAll({
        limit:100
      })
      res.send(influencer)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const influencer = await Influencer.findByPk(req.params.influencerId)

      res.send(influencer)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the influencers'
      })
    }
  },
  async kill (req,res){
    try{
      const influencer = await Influencer.findByPk(req.params.influencerId)
      influencer.destroy();

    }catch(err){
      error:'No Influencer to delete'
    }
  },
  async post (req, res) {
    try {
      const influencer =await Influencer.create(req.body)
      const influencerJson = influencer.toJSON()
      res.send({
        influencer:influencerJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  },
  async put (req, res) {
    try {
      await Influencer.update(req.body, {
        where: {
          id: req.params.influencerId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the Influencer'
      })
    }
  },
}