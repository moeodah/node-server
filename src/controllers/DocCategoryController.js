const {DocCategory} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const docCategory =await DocCategory.findAll({
        limit:100
      })
      res.send(docCategory)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const docCategory = await DocCategory.findByPk(req.params.docCategoryId)

      res.send(docCategory)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const docCategory = await DocCategory.findByPk(req.params.docCategoryId)
      docCategory.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const docCategory =await DocCategory.create(req.body)
      const docCategoryJson = docCategory.toJSON()
      res.send({
        docCategory:docCategoryJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}