import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIIWF14a935b_xDea7urVDdZLTmkvOZz4",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "tishtariwalala.firebaseapp.com",
  storageBucket: "tishtariwalala",
  messagingSenderId: "tishtariwalala.firebasestorage.app",
  appId: "1033857334567"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
