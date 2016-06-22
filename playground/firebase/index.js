import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBhIdsnbItpxIWuVLRZ4BNEWQDJ0ZdYsGY",
  authDomain: "mead-todo-app-e8194.firebaseapp.com",
  databaseURL: "https://mead-todo-app-e8194.firebaseio.com",
  storageBucket: "mead-todo-app-e8194.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
var notesRef = firebaseRef.child('notes');

// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Alex',
//     age: 43
//   }
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User changed: ', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'ALX 6'
// });
//
// firebaseRef.child('user').update({
//   age: 45
// });
//
// firebaseRef.child('user').update({
//   name: 'ALX 5',
//   teste: [1,2,3,4,5]
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo App',
//   'user/age': 30,
//   'user/name': 'Victor Trindade'
// }).then(() => {
//   console.log('OK');
// }, (e) => {
//   console.log('Error');
// });

//firebaseRef.child('user/age').remove();

// firebaseRef.child('user').update({
//   age: 45,
//   name: null
// })

// firebaseRef.update({
//   isRunning: null,
//   'user/name': 'Alex',
//   'user/age': 42
// });

// .then(() => {
//   console.log('Set worked!');
// }, (e) => {
//   console.log('Set failed!');
// });
//
// firebaseRef.child('user').set({
// name: 'Mike'
// });
//
// firebaseRef.child('app').set({
// name: 'Todo App'
// });

// firebaseRef.child('user').once('value').then((snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }, (e) => {
//   console.log(e);
// });

// var logData = (snapshot) => {
//   console.log(snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.update({isRunning: false});
// firebaseRef.update({'user/age': 32});
//
// firebaseRef.off('value', logData);
//
// firebaseRef.update({'user/name': 'Alex ade'});

notesRef.on('child_added', (snapshot) => {
  console.log('ADDED', snapshot.key);
});

notesRef.on('child_changed', (snapshot) => {
  console.log('CHANGED', snapshot.key);
});

notesRef.on('child_removed', (snapshot) => {
  console.log('REMOVED', snapshot.key);
});

var newNoteRef = notesRef.push({
  text: 'walk the dog 3'
});

// notesRef.remove();
