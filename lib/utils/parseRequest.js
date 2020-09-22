module.exports = rawRequest => {
    let response = {};
    const method = rawRequest.toString().split('\n')[0].split(' ')[0]
    const path = rawRequest.toString().split('\n')[0].split(' ')[1]
    const content = rawRequest.toString().split('\n')

    if(content.includes("\r") || content.includes("")) {
        return request = {
            method: method,
            path: path,
            body: content.pop()
        }
    } else {
        return request = {
            method: method,
            path: path,
        }
    }
};
