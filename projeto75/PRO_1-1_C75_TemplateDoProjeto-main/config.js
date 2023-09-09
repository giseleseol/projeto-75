import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBp2a_H-ewCQkeW6hJHPUiDvZ75oITUXXk",
  authDomain: "projeto-71-da15b.firebaseapp.com",
  projectId: "projeto-71-da15b",
  storageBucket: "projeto-71-da15b.appspot.com",
  messagingSenderId: "178999704486",
  appId: "1:178999704486:web:c8eb8569fd68fdfc7a6d67"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
