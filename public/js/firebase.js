let firebaseConfig = {
  apiKey: "AIzaSyBrVsziHZWHrSK3e-Xdv930F2hJj1t4Tl0",
  authDomain: "blogging-website-497ae.firebaseapp.com",
  projectId: "blogging-website-497ae",
  storageBucket: "blogging-website-497ae.appspot.com",
  messagingSenderId: "1098021581230",
  appId: "1:1098021581230:web:c9ba980fa9e046b21b983f",
  measurementId: "G-665XBYDHR2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let db = firebase.firestore();