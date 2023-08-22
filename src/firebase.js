import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHPUC8QPvlsq2E3OT86wC2tpPZ3PXtV2c",
  authDomain: "bobatime-95c76.firebaseapp.com",
  projectId: "bobatime-95c76",
  storageBucket: "bobatime-95c76.appspot.com",
  messagingSenderId: "628416000512",
  appId: "1:628416000512:web:010493cecba51277979ee5",
  measurementId: "G-3HECJQTCGB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;