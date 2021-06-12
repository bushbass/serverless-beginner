
exports.handler = async event => {
  const axios = require('../node_modules/axios')
    const swapiName = {}
    const data =await axios.get('https://swapi.dev/api/people/1')
       console.log(data);
    
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: `Hello ${data.name}!`
    }
  }