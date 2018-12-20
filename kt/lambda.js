let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    // read from event, run your logic; complete via callback(<error, or null on success>, <JSON result on success>)
    Swagger.http({
        url: `https://services.pre-prod.apixplatform.com/api-sandbox/application/token`,
        method: 'post',
        query: {},
        headers: { "Accept": "*/*", "Content-Type": "application/json" },
        body: JSON.stringify({ "password": "Jupiter!123", "userName": "n12kumar@mail.com" })
    }).then((response) => {
        // your code goes here
        console.log(response);
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}