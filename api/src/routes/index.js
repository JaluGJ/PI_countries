const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes = require('./countries.js');
const activitiesRoutes = require('./activities.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activities', activitiesRoutes)
router.use('/countries', countriesRoutes)


module.exports = router;
