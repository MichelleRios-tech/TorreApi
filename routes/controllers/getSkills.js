const axios = require('axios');

const torreSkillsURL = 'https://bio.torre.co/api/bios/';

module.exports = getSkills= async (req,res,next) => {
try  { 
    const {username} = req.params;
    let response = (await axios.get(torreSkillsURL+username)).data;
     response = {
        name: response.person.name,
        picture: response.person.picture,
        strengths: response.strengths.map(strength => {
            return {
                name: strength.name, 
                proficiency: strength.proficiency, 
                recommendations: strength.recommendations, 
                weight: strength.weight} 
        }),
    }
    res.status(200).json(response);
}
catch (err){
    next(err);
}
}