const admin = require('firebase-admin');
const serviceAccount = require('./accoderhouse32065-firebase-adminsdk-wvua1-4135df6060.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://accoderhouse32065.firebaseio.com'
})
const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();
const queryCarritos = db.collection('carritos');
const queryProductos = db.collection('productos');

module.exports = {
    queryCarritos,
    queryProductos,
    FieldValue
};