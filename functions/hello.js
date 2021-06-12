const axios = require(axios)
const swapiName = ''
axios.get('https://swapi.dev/api/people/1')
    .then(res=>res.json())

exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
        .then(json=>swapiName=json.name)
    return {
      statusCode: 200,
      body: `Hello ${swapiName}!`
    }
  }