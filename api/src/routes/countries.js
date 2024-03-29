const { Router } = require('express');
const { Country, Activity } = require('../db.js')
//----------------------
const router = Router();

async function conection() {
  return await Country.findAll({
    include: Activity
  })
}

router.get('/', async (req, res) => {
  const { name } = req.query
  const info = await conection()
  const mejorcito = info.map(e => e.dataValues)
  
  if (!name) {
    try {
      return res.status(200).json(mejorcito)
    } catch (error) {
      return res.status(404).send(error)
    }
  }
  else {
    const buscador = await mejorcito.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
    if (buscador.length) return res.status(200).json(buscador)
    else return res.status(404).json({ msg: "No se ha encontrado ningun país con ese nombre" })
  }
})

router.get('/:idPais', async (req, res) => {
  const { idPais } = req.params
  if (idPais.length !== 3) return res.status(400).json({ msg: 'El id del pais debe tener 3 letras' })
  try {
    const pais = await Country.findOne({
      where: { id: idPais.toUpperCase() },
      include: Activity
    })
    pais ? res.status(200).json(pais) : res.status(404).json({ msg: 'No se ha encontrado el país' })
  } catch (error) {
    console.log(error)
    return res.status(404).send(error)
  }
})

module.exports = router