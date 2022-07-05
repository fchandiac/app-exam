import { Component } from '@angular/core';

import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect } from "firebase/auth"
import { Router } from '@angular/router';


const firebaseConfig = {
  apiKey: "AIzaSyAS2ev4-oS8KUEMLbB_aK1isEBFmkgtKzM",
  authDomain: "mltpltfrm.firebaseapp.com",
  projectId: "mltpltfrm",
  storageBucket: "mltpltfrm.appspot.com",
  messagingSenderId: "518163078492",
  appId: "1:518163078492:web:eb0230c15dd8dffd5c7599"
}

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) { }

  out() {
    getAuth().signOut().then(() => {
      this.router.navigate(['/tabs/tab1'])
    })
  }

  tab2(){
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        this.router.navigate(['/tabs/tab2'])
      } else {
        this.router.navigate(['/tabs/tab1'])
      }
    })
  }

  tab3(){
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        this.router.navigate(['/tabs/tab3'])
      } else {
        this.router.navigate(['/tabs/tab1'])
      }
    })
  }

}
