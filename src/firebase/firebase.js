import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBulNz-aa2rXSs6c2NK_ooqA-iusY_trEY",
    authDomain: "discord-clone-b4739.firebaseapp.com",
    projectId: "discord-clone-b4739",
    storageBucket: "discord-clone-b4739.appspot.com",
    messagingSenderId: "136431816371",
    appId: "1:136431816371:web:7ca889d0c1529e79fe6ac6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;