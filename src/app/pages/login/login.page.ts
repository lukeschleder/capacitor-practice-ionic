import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:User = new User();

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.navCtrl.navigateForward('home');
        this.user.email = '';
        this.user.password = '';
      }

    } catch (err) {
      console.error(err);
      var errorCode = err.code;
      var errorMessage = err.message;
      if (errorCode === 'auth/wrong-password') {
        alert ('Wrong password.');
      } else {
        alert(errorMessage);
      }
    }
  }
}
