const {Memos} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      const memos =await Memos.findAll({
        limit:100
      })
      res.send(memos)
    } catch (err) {
      res.status(500).send({
        error: 'Error Fetching'
      })
    }
  },
  
  async show (req, res) {
    try {

      const memos = await Memos.findByPk(req.params.memosId)

      res.send(memos)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async kill (req,res){
    try{
      console.log("here?", req.params.memoId)
      const memos = await Memos.findByPk(req.params.memoId)
      console.log(memos)
      memos.destroy();

    }catch(err){
      error:'No Memo to delete'
    }
  },
  async post (req, res) {
    try {
      const memos =await Memos.create(req.body)
      const memosJson = memos.toJSON()
      res.send({
        memos:memosJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'WRONG'
      })
    }
  }
}