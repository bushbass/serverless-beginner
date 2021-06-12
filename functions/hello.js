
exports.handler = async event => {
    const axios = require(axios)
    const subject = event.queryStringParameters.name || 'World'
    const swapiName = ''
    axios.get('https://swapi.dev/api/people/1')
        .then(res=>res.json())
        .then(json=>swapiName=json.name)
    return {
      statusCode: 200,
      body: `Hello ${swapiName}!`
    }
  }