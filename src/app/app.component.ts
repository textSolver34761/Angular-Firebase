import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase2';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCk0VtVp622CN-1KcdJndtUiDqJL__DQGU",
      authDomain: "angular-40936.firebaseapp.com",
      projectId: "angular-40936",
      storageBucket: "angular-40936.appspot.com",
      messagingSenderId: "692206017572",
      appId: "1:692206017572:web:d04bef4349bdce98aa4cb1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
