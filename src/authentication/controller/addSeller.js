export default function addSellerUser({ addUser }) {
    return async function addSeller(httpRequest) {
        try {
            const userInfo = httpRequest.body;
            const added = await addUser(
                userInfo,
            );
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(posted.modifiedOn).toUTCString()
                },
                statusCode: 201,
                body: { added }
            };

        } catch (e) {
            console.log(e);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    }
}

