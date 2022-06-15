//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Country } = require('./src/db.js');

const hereWeGo = async () => {
  try {
    const info = await axios.get('https://restcountries.com/v3.1/all');
    const data = info.data.map(i => {
      return {
        id: i.cca3,
        name: i.name.common,
        flag: i.flags.png,
        continent: i.continents,
        capital: i.capital,
        subregion: i.subregion,
        area: i.area,
        population: i.population
      }
    })
    data.forEach(async (paises) => {
      let cap;
      if (!paises.capital) {
        cap = 'ThereIsNoCapital'
      }
      else {
        cap = paises.capital[0]
      }
      const [createCountries, isCreated] = await Country.findOrCreate({
        where: {id: paises.id,},
        defaults:{
          id: paises.id,
        name: paises.name,
        flag: paises.flag,
        continent: paises.continent[0],
        capital: cap,
        subregion: paises.subregion,
        area: paises.area,
        population: paises.population
        }
      })
      console.log(isCreated)
    })

  } catch (error) {
    console.log(error)
  }
}

// Syncing all the models at once.
conn.sync().then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    hereWeGo()
  });
});
