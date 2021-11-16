const axios = require('axios');

const torreSearchURL = 'https://search.torre.co/people/_search';

module.exports = searchPeople = async (req,res,next) => {
try  { 
    const {term} = req.body;
    console.log(term);
    let response = (await axios.post(torreSearchURL, {name: {term}})).data;

    res.status(200).json(response.results);
}
catch (err){
    next(err);
}
}