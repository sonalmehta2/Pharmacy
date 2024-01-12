
import firebase from 'firebase';




//TODO: Add your firebase config in here
 const firebaseConfig = {
         apiKey: "AIzaSyDhosqCsNYqhBJ0dvVFtupFCp0SpgXqlMs",
        authDomain: "pharmacy-app-a81d8.firebaseapp.com",
        databaseURL: "https://pharmacy-app-a81d8-default-rtdb.firebaseio.com",
        projectId: "pharmacy-app-a81d8",
        storageBucket: "pharmacy-app-a81d8.appspot.com",
        messagingSenderId: "232437046276",
        appId: "1:232437046276:web:b3402077d930b128722951"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()