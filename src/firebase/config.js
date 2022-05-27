import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA6prrqc1xXx8FrQj2MHkykh8U3fH9Zv4M',
  authDomain: 'ch-ecommerce-e449e.firebaseapp.com',
  projectId: 'ch-ecommerce-e449e',
  storageBucket: 'ch-ecommerce-e449e.appspot.com',
  messagingSenderId: '879868896237',
  appId: '1:879868896237:web:b639cc834a74a8c7ddfde4',
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
