function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent')
            }
        }
        try {
            controller(httpRequest)
                .then(httpResponse => {
                    if (httpResponse.headers) {
                        res.set(httpResponse.headers)
                    }
                    res.type('json')
                    return res.status(httpResponse.statusCode).send(httpResponse.body);
                })
                .catch(e => res.status(500).send({ error: 'An unkown error occurred.' }))
        } catch (e) {
            console.log(e);
        }
    }
}
export default makeExpressCallback;