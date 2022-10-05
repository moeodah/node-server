const {Applications} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const applications =await Applications.findAll({
        limit:100
      })
      res.send(applications)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const applications = await Applications.findByPk(req.params.applicationId)

      res.send(applications)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const applications = await Applications.findByPk(req.params.applicationId)
      applications.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const applications =await Applications.create(req.body)
      const applicationsJson = applications.toJSON()
      res.send({
        applications: applicationsJson
      })
    } catch (err) {
      res.status(300).send({
        error: 'WRONG'
      })
    }
  },
  async put (req, res) {
    try {
      await Applications.update(req.body, {
        where: {
          id: req.params.applicationId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the application'
      })
    }
  }
}