const axios = require('axios');

const torreSkillsURL = 'https://bio.torre.co/api/bios/';

module.exports = getSkillsByID= async (req,res,next) => {
try  { 
    const {username} = req.params;
    const response = (await axios.get(torreSkillsURL+username)).data;
    res.status(200).json(response)
}
catch (err){
    next(err);
}
}