import Rebase from 're-base';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCWTXEe0Zu9ylO2ifiVp9uwHe7G4nB6mY4",
    authDomain: "shawnricemakeswebsites.firebaseapp.com",
    databaseURL: "https://shawnricemakeswebsites.firebaseio.com",
    projectId: "shawnricemakeswebsites",
    storageBucket: "shawnricemakeswebsites.appspot.com",
    messagingSenderId: "655462170572"
}

export const fbApp = firebase.initializeApp(config);
const db = fbApp.database();
const database = Rebase.createClass(db);

export default database;
