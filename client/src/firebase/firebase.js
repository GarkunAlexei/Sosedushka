import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBOaH-2kFMYzPUeJzGn0GMSBffOPFG-Y3A",
  authDomain: "sosedushka-react-storage-4eb95.firebaseapp.com",
  projectId: "sosedushka-react-storage-4eb95",
  storageBucket: "sosedushka-react-storage-4eb95.appspot.com",
  messagingSenderId: "418975600443",
  appId: "1:418975600443:web:e9a934a804f1fd6f1b311e"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage();
