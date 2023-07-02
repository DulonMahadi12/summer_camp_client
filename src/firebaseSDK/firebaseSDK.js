// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyiPyGUsjOOdr2BCHmd1M3YQnFOnVrGYw',
  authDomain: 'summer-fe021-camp.firebaseapp.com',
  projectId: 'summer-fe021-camp',
  storageBucket: 'summer-fe021-camp.appspot.com',
  messagingSenderId: '620493697093',
  appId: '1:620493697093:web:6e44b5e8fb55ed57f2332c',
  measurementId: 'G-QGP7F1W5ZP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
