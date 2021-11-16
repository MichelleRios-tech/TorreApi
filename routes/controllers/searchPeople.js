const axios = require('axios');

const torreSearchURL = 'https://search.torre.co/people/_search';

module.exports = searchPeople = async (req,res,next) => {
try  { 
    const {term} = req.body;
    let response = (await axios.post(torreSearchURL, {name: {term}})).data;

    res.status(200).json(response)
}
catch (err){
    next(err);
}
}