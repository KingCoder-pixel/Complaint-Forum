import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  
    apiKey: "AIzaSyDXuCg84esnCu8dNy46IH7hvs2Uz87sHkE",
    authDomain: "complaint-forum-c4bdd.firebaseapp.com",
    projectId: "complaint-forum-c4bdd",
    storageBucket: "complaint-forum-c4bdd.appspot.com",
    messagingSenderId: "811746688265",
    appId: "1:811746688265:web:5bf647605a7036e48267d8"
  
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

