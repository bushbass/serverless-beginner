const axios = require(axios)
const swapiName = ''
function getSwapi(){
    axios.get('https://swapi.dev/api/people/1')
    .then(res=>res.json())
    .then(json=>swapiName=json.name)
}
getSwapi()

exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: `Hello ${swapiName}!`
    }
  }