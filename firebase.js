import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpHPQXfWFKamxD9cXeE5VVd9nvnmyXugo",
  authDomain: "abror-xamroyev.firebaseapp.com",
  projectId: "abror-xamroyev",
  storageBucket: "abror-xamroyev.appspot.com",
  messagingSenderId: "21595399105",
  appId: "1:21595399105:web:3981d722eab385ead88540"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpHPQXfWFKamxD9cXeE5VVd9nvnmyXugo",
  authDomain: "abror-xamroyev.firebaseapp.com",
  projectId: "abror-xamroyev",
  storageBucket: "abror-xamroyev.appspot.com",
  messagingSenderId: "21595399105",
  appId: "1:21595399105:web:3981d722eab385ead88540"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /test_results/{id} {
      allow write: if true;        // hamma yozishi mumkin
      allow read: if false;        // hech kim o‘qiy olmaydi
    }

  }
}
