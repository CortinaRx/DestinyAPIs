const Country = require('./country.model')
const { setError } = require('../../utils/error/error')



const postNewCountry = async (req, res, next) => {
    try {
        const newCountry = new Country()
        newCountry.id = req.body.id
        newCountry.name = req.body.name
        newCountry.temperature = req.body.temperature
        newCountry.capitals = req.body.capitals
        newCountry.population = req.body.population
        newCountry.image = req.body.image
        newCountry.beach = req.body.beach
        if (req.file) {
            newCountry.img = req.file.path
        }
        const countryDB = await newCountry.save()
        return res.status(201).json(countryDB)
    } catch (error) {
        return next(setError(500, 'Country not saved'))
    }
}

const getAllCountries = async (req, res, next) => {
    try {
        const countriesDB = await Country.find()
        res.status(200).json(countriesDB)
    } catch (error) {
        return next(setError(500, 'Countries failed server'))
    }
}

const getCountry = async (req, res, next) => {
    try {
        const { id } = req.params
        const countryDB = await Country.findById(id)
        if (!countryDB) {
            return next(setError(404, 'Country not found'))
        }
        return res.status(200).json(countryDB)
    } catch (error) {
        return next(setError(500, 'Country server error'))
    }
}



module.exports = {
    postNewCountry,
    getAllCountries,
    getCountry,
 
}
