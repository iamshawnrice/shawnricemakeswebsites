const Rebase = require('re-base');
const firebase = require('firebase/app');
const fbDatabase = require('firebase/database');

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWTXEe0Zu9ylO2ifiVp9uwHe7G4nB6mY4",
  authDomain: "shawnricemakeswebsites.firebaseapp.com",
  databaseURL: "https://shawnricemakeswebsites.firebaseio.com",
  projectId: "shawnricemakeswebsites",
  storageBucket: "shawnricemakeswebsites.appspot.com",
  messagingSenderId: "655462170572"
});

const db = fbDatabase(app);
const database = Rebase.createClass(db);

export default database;
