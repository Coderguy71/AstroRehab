// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-KFNeHWc8e1jSlB3sWD5qEJQKdVK4xxY",
  authDomain: "astrorehab-f620a.firebaseapp.com",
  projectId: "astrorehab-f620a",
  storageBucket: "astrorehab-f620a.firebasestorage.app",
  messagingSenderId: "559921435952",
  appId: "1:559921435952:web:53e321066fba3ca600e4f5"
};

// Initialize Firebase
console.log('Initializing Firebase...');
let app;
let db;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase app initialized');
  
  // Initialize Firestore with settings to avoid warnings
  db = getFirestore(app);
  console.log('Firestore initialized');
  
  // Initialize Analytics (optional)
  analytics = getAnalytics(app);
  console.log('Analytics initialized');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

// Function to add a contact form submission
const submitContactForm = async (formData) => {
  console.log('submitContactForm called with data:', formData);
  
  if (!db) {
    const error = new Error('Firestore not initialized');
    console.error('Firestore not initialized');
    return { success: false, error };
  }

  try {
    console.log('Adding document to Firestore...');
    
    const docData = {
      name: formData.name || '',
      email: formData.email || '',
      message: formData.message || '',
      timestamp: serverTimestamp(),
      ipAddress: '', // Will be set by Firestore security rules if needed
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
    };
    
    console.log('Document data prepared:', docData);
    
    const docRef = await addDoc(collection(db, 'contactSubmissions'), docData);
    
    console.log('Document written with ID: ', docRef.id);
    return { 
      success: true,
      docId: docRef.id
    };
    
  } catch (error) {
    console.error('Error in submitContactForm:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    // More specific error handling
    if (error.code === 'permission-denied') {
      console.error('Permission denied. Check your Firestore security rules.');
    } else if (error.code === 'unavailable') {
      console.error('Firestore service is unavailable. Check your internet connection.');
    }
    
    return { 
      success: false, 
      error: {
        message: error.message,
        code: error.code
      }
    };
  }
};

// Function to add an early access signup
const submitEarlyAccess = async (email) => {
  try {
    const docRef = await addDoc(collection(db, 'earlyAccessSignups'), {
      email: email,
      timestamp: new Date(),
    });
    console.log('Early access signup with ID: ', docRef.id);
    return { success: true };
  } catch (error) {
    console.error('Error adding early access signup: ', error);
    return { success: false, error };
  }
};

export { db, submitContactForm, submitEarlyAccess };
