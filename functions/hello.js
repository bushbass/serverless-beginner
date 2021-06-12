exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    const swapiName = ''
    fetch('https://swapi.dev/api/people/1')
        .then(res=>res.json())
        .then(json=>swapiName=json.name)
    return {
      statusCode: 200,
      body: `Hello ${swapiName}!`
    }
  }