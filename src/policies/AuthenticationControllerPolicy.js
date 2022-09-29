const Joi = require ('joi')

module.exports = { 
    register(req,res,next){
        const schema = Joi.object({ 
            email:Joi.string().email(),
            password:Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const {error,value} =  schema.validate(req.body)
        console.log(req.body,"------")

        if(error){
            switch (error.details[0].context.key){
                case 'email':
                    console.log("email-------")
                    res.status(400).send({
                        error:'Please provide a valid email address'
                    })
                    break
                case 'password':
                    console.log("password------")

                    res.status(400).send({
                        error:`Password must be ONLY: lower case, upper case letters and numbers (8-32 characters)`
                    })
                    break
                default:
                    console.log("default-------")
                    res.status(400).send({
                        
                        error:`Invalid information`
                    })
            }
        }else{
        next()
        }
    }
}