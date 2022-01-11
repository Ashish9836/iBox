// for making connection with google firebase


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const app = firebase.initializeApp({
  apiKey: "AIzaSyB3nW4Qk88AlvjeRZk4TGoA-UW_tP76uPw",
  authDomain: "ibox-9ae73.firebaseapp.com",
  projectId: "ibox-9ae73",
  storageBucket: "ibox-9ae73.appspot.com",
  messagingSenderId: "208884144603",
  appId: "1:208884144603:web:31e9b2d51bf988c9c4effe"
  });

  export const auth = app.auth();
  export const firestore = app.firestore();
  export const database = {
      folders: firestore.collection('folders'),
      files: firestore.collection('files'),
      formatDoc: doc=>{
          return {
              id:doc.id,
                ...doc.data()
          }
      },
      getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
  }


export const storage = app.storage();
export default app;