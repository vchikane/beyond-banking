/* this module is to get transaction histroy of a user */

try {
    module.exports = {
        getTransactions: function (req, res) {
            const request = require('request');

            const host = "https://beyondbanking.openbankproject.com";
            const path_token = "/my/logins/direct";

            const headers_token = {
                "Content-Type": "application/json",
                "Authorization": "DirectLogin username=TAMMO,password=TAMMO@Int3rconnect,consumer_key=ovf0ammuj1btmee5jlosoaacyoavvnrsvybbaj1l"
            };

            request({
                method: 'POST',
                uri: host + path_token,
                headers: headers_token
            }, function (error, response, body) {
                const access_token = JSON.parse(body).token;
                console.log("token: ", token);
                const path = "/obp/v2.1.0/my/banks/bb.01.uk.uk/accounts/tammo_1000/transactions";

                const headers_transactions = {
                    "Authorization": "DirectLogin token=" + access_token
                };

                request({
                    method: 'GET',
                    uri: host + path,
                    headers: headers_transactions
                }, function (error, response, body) {
                    console.log("transaction body: ", body);
                });
            });

        }
    };

} catch (ex) {
    console.log(ex);
}