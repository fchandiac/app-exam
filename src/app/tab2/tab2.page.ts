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



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clients: any = []
  nombre = ""
  correo = "app_mail"

  constructor(private router: Router) { }

  ngOnInit() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        this.router.navigate(['/tabs/tab1'])
      }
    })

    fetch('https://988w4ndhpj.execute-api.us-east-1.amazonaws.com/dev/cliente')
      .then(res => {
        res.json().then(res => {
          let data = JSON.parse(res.body)
          this.clients = data
        })
      }).catch(err => { console.log(err) })
  }

  submit() {
    let data = {
      "body": {
        "nombre": this.nombre,
        "correo": this.correo
      }
    }
    fetch('https://988w4ndhpj.execute-api.us-east-1.amazonaws.com/dev/cliente', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      }
    }).then(res => {
      this.nombre = ""
      this.ngOnInit()
    }).catch(err => { console.log(err) })
  }
}
