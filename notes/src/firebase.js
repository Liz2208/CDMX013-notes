import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfeqy3qIGBjp9mTFP4DT6PmI31Hwkdm7s",
  authDomain: "notes-369400.firebaseapp.com",
  projectId: "notes-369400",
  storageBucket: "notes-369400.appspot.com",
  messagingSenderId: "793214453152",
  appId: "1:793214453152:web:d14ec2974b2bb5eafb50c5",
  measurementId: "G-ZWQETT1QFW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);