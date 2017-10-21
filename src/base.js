import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCR-gdqt2ECG0q7v4fHePKF93hyDzHxKCM",
  authDomain: "ezkl-pem-68dea.firebaseapp.com",
  databaseURL: "https://ezkl-pem-68dea.firebaseio.com",
  projectId: "ezkl-pem-68dea",
  storageBucket: "ezkl-pem-68dea.appspot.com",
  messagingSenderId: "291027398324"
});

const base = Rebase.createClass(app.database());

export default base;
