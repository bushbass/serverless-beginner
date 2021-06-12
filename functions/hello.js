
exports.handler = async event => {
  const axios = require('../node_modules/axios')
    const swapiName = ''
     function getSwapi(){
        axios.get('https://swapi.dev/api/people/1')
        .then(res=>res.json())
        .then(json=>swapiName=json.name).then(console.log({swapiName}))
    }
    const subject = event.queryStringParameters.name || 'World'
    getSwapi()
    return {
      statusCode: 200,
      body: `Hello ${swapiName}!`
    }
  }