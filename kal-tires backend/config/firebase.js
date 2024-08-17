var admin = require("firebase-admin");

var serviceAccount = require("../ServiceKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;