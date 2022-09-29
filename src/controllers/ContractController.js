const {Contract} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const contract =await Contract.findAll({
        limit:100
      })
      res.send(contract)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const contract = await Contract.findByPk(req.params.contractId)

      res.send(contract)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const contract = await Contract.findByPk(req.params.contractId)
      contract.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const contract =await Contract.create(req.body)
      const contractJson = contract.toJSON()
      res.send({
        contract:contractJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}