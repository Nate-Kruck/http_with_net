module.exports = rawRequest => {
    let response = {};
    const method = rawRequest.toString().split('\n')[0].split(' ')[0]
    const path = rawRequest.toString().split('\n')[0].split(' ')[1]
    const content = rawRequest.toString().split('\n')

    content.includes("")
    ?
    response = {
        method: method,
        path: path,
        body: content.pop()
    }
    :
    response = {
        method: method,
        path: path,
    }
    return response
};
