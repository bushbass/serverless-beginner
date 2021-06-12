exports.handler = async event => {
    const subject = event.queryStringParamaters.name || "world "
    return {
        statusCode: 200,
        body: `hello ${subject}`
    }
    
}