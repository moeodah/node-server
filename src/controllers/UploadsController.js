const multer = require('multer')
const {Uploads} = require('../models')

module.exports = {
    upload : multer({
        dest:'./uploads/'
    }),
    async post(req,res){
        try{
            res.json({ file: req.file})
        }catch(err){

        }
    },

    async get(req,res){
        try{
            
        }catch(err){

        }
    }
}