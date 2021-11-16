const axios = require('axios');

const torreSearchURL = 'https://search.torre.co/people/_search';

module.exports = searchPeople = async (req, res, next) => {
    try {
        const { values } = req.body;
        console.log(values);
        let response = (await axios.post(torreSearchURL, {
            'skill/role':
            {
                text: values.name,
                proficiency: values.proficiency
            }
        }
        )).data;

        response = response.results.map(result => {
            return {
                name: result.name,
                picture: result.picture,
                professionalHeadline: result.professionalHeadline,
               
            }
        })

        res.status(200).json(response);
    }
    catch (err) {
        next(err);
    }
}