import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBhIdsnbItpxIWuVLRZ4BNEWQDJ0ZdYsGY",
    authDomain: "mead-todo-app-e8194.firebaseapp.com",
    databaseURL: "https://mead-todo-app-e8194.firebaseio.com",
    storageBucket: "mead-todo-app-e8194.appspot.com",
  };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
