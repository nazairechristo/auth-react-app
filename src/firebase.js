import firebase from 'firebase/compat';



const firebaseConfig = {
    apiKey: "AIzaSyDlE_0KXe9wd943s_C2a_qHl5BWlG5giMc",
    authDomain: "my-react-auth-app.firebaseapp.com",
    projectId: "my-react-auth-app",
    storageBucket: "my-react-auth-app.appspot.com",
    messagingSenderId: "764426131204",
    appId: "1:764426131204:web:3886cccc2f0094127c6251"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth }


export default firebase;




