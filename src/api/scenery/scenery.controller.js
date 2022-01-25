const Scenery = require('./scenery.model')
const { setError } = require('../../utils/error/error')



const postNewScenery = async (req, res, next) => {
    try {
        const newScenery = new Scenery()
        newScenery.id = req.body.id
        newScenery.name = req.body.name
        newScenery.country = req.body.country
        newScenery.poster = req.body.poster
        if (req.file) {
            newScenery.img = req.file.path
        }
        const sceneryDB = await newScenery.save()
        return res.status(201).json(sceneryDB)
    } catch (error) {
        return next(setError(500, 'Scenery not saved'))
    }
}

const getAllScenerys = async (req, res, next) => {
    try {
        const scenerysDB = await Scenery.find()
        res.status(200).json(scenerysDB)
    } catch (error) {
        return next(setError(500, 'Scenery failed server'))
    }
}

const getScenery = async (req, res, next) => {
    try {
        const { id } = req.params
        const sceneryDB = await Scenery.findById(id)
        if (!sceneryDB) {
            return next(setError(404, 'Scenery not found'))
        }
        return res.status(200).json(sceneryDB)
    } catch (error) {
        return next(setError(500, 'Scenery server error'))
    }
}


module.exports = {
    postNewScenery,
    getAllScenerys,
    getScenery

}
