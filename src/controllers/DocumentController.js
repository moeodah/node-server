const {Document} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const document =await Document.findAll({
        limit:100
      })
      res.send(document)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const document = await Document.findByPk(req.params.documentId)

      res.send(document)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const document = await Document.findByPk(req.params.documentId)
      document.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const document =await Document.create(req.body)
      const documentJson = document.toJSON()
      res.send({
        document:documentJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  },
  async put (req, res) {
    try {
      await document.update(req.body, {
        where: {
          id: req.params.documentId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the document'
      })
    }
  },
}