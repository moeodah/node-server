const multer = require('multer')
const {Uploads} = require('../models')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
module.exports = {
    upload : multer({
        dest:'./uploads/'
    }),
    async post (req, res) {
        try {
          console.log(req.file)
          await sharp(req.file.path)
          .embed()
          .toFile(`./static/${req.file.originalname}`)

          fs.unlink(req.file.path, () => {
            res.json({ file: `/static/${req.file.originalname}`})
          })
          res.send({
            file: req.file
          })
        } catch (err) {
          res.status(500).send({
            error: 'WRONG'
          })
        }
      },

    async get(req,res){
        try{
            const uploads =await Uploads.findAll({
                limit:100
              })
              res.send(uploads)
        }catch(err){

        }
    }
}