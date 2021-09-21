import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { seedDatabase, seedDatbase } from '../seed';

//First, see the database


// Define config

const firebaseConfig = {  
    apiKey: "AIzaSyDCqm_yqT8Vm_br63k-_QfILsbekMtGdKo",
    authDomain: "danflix-318ae.firebaseapp.com",
    projectId: "danflix-318ae",
    storageBucket: "danflix-318ae.appspot.com",
    messagingSenderId: "925171680735",
    appId: "1:925171680735:web:bc2c5415f3488d38e6f06a"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };