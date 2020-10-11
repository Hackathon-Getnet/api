const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = async (req,res,next)=>{
    const authHeader = req.session.token;

    if(!authHeader){
        return res.status(401).redirect('/login');
    }

    //const [, token] = authHeader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(authHeader,process.env.APP_SECRET);

        req.userId = decoded.id
        return next()
    }catch (err){
        return res.status(401).json({message:"Token ivalid"})
    }

    
};