/* this is the node entry point, used to start the server on port 9000 and route the request based on pathsuffix */

try {   
    const http = require('http');
    const express = require('express');
    const app = express();
    app.listen(process.env.PORT || 9000);
    console.log("server is listening");
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.disable('etag');

    const transactions = require("./transactions.js");    


    app.get('/transactions', transactions.getTransactions);

} catch (ex) {
    console.log(ex);
}

// app.listen(process.env.PORT || 9000);
// console.log("server is listening");