const { Router } = require('express');
const { Country, Activity } = require('../db.js')
//----------------------
const router = Router();

async function actConnection (){
    return await Activity.findAll()
}


router.get('/', async (req, res) => {
    const {id} = req.query
    const info = await actConnection()
    const better = info?.map(e=>e.dataValues)

    if (!id){
        try {
            return res.status(200).json(better)
        } catch (error) {
            throw error
        }
    }
    else {
        const buscador = better.filter(e => e.id === id)
        if (!buscador.length)res.status(404).json({msg: 'esta actividad no existe'})
        return res.status(200).json(buscador)
    }
})

router.post('/', async (req, res) => {
    const { pais, name, dificulty, duration, season } = req.body
    //if (!id||!name||!dificulty||!duration||!season) {
    //    return res.status(400).json({msg: 'Some data is not found'})
    if (!pais) return res.status(400).json({ msg: 'falta el pais' })
    if (!name) return res.status(400).json({ msg: 'falta el name' })
    if (!dificulty) return res.status(400).json({ msg: 'falta el dificulty' })
    if (!duration) return res.status(400).json({ msg: 'falta el duration' })
    if (!season) return res.status(400).json({ msg: 'falta el season' })
    try {
        const paises = await Country.findAll({ where: { name: pais } })
        const actividades = await Activity.create({
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season,
        })

        actividades.addCountries(paises)

        res.status(200).json(actividades)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})
module.exports = router

//---------hacer ruta para delete----------
/* router.delete('/', async(req, res)=>{
    
    try {
        
    } catch (error) {
        
    }
}) */