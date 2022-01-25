const SceneryRoutes = require('express').Router()
const upload = require('../../middleware/file')
const { postNewScenery, getAllScenerys, getScenery } = require('./scenery.controller')

//De momento nuestra API es de Lineage2, quizas en un futuro agregaremos nuevos juegos RPG, por lo cual, dejaremos nuestra ruta de GetAllGames,
// ya que probablemente pueda cambiar esto, de momento se vera solo Lineage2.
SceneryRoutes.get('/', getAllScenerys)
SceneryRoutes.get('/:id', getScenery)
SceneryRoutes.post('/', upload.single('img'), postNewScenery)


module.exports = SceneryRoutes