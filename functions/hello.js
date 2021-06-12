
exports.handler = async event => {
  const axios = require('../node_modules/axios')
    const swapiName = {}
    
    const subject = event.queryStringParameters.name || 'World'
    axios.get('https://swapi.dev/api/people/1')
        .then(res=>res.json())
        .then(data=>{swapiName=data;console.log('inside axios');})
        console.log(swapiName);
    return {
      statusCode: 200,
      body: `Hello ${swapiName.name}!`
    }
  }