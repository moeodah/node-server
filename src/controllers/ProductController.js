const {Product} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const product =await Product.findAll({
        limit:100
      })
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const product = await Product.findByPk(req.params.productId)

      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      const product = await Product.findByPk(req.params.productId)
      product.destroy();

    }catch(err){
      error:'No employee to delete'
    }
  },
  async post (req, res) {
    try {
      const product =await Product.create(req.body)
      const productJson = product.toJSON()
      res.send({
        product:productJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  },
  async put (req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.productId
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