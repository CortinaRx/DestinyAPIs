const CountryRoutes = require('express').Router()
const upload = require('../../middleware/file')
const { postNewCountry, getAllCountries, getCountry } = require('./country.controller')

//Las personas interesadas a ver esta API podran atacar en el caso todos los characters que hay de este juego, tambien obtener cualquier character en particular, solo promocionando el ID que interese al ver todos los characters.
//Solo personas autorizadas podran CREAR, CAMBIAR, o BORRAR characters, en caso de necesitarse.
CountryRoutes.get('/', getAllCountries)
CountryRoutes.get('/:id', getCountry)
CountryRoutes.post('/', upload.single('img'), postNewCountry)

module.exports = CountryRoutes

