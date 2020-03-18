import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user:User = new User();

  constructor(public navCtrl: NavController, public fAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
        alert('Successfully registered!');
        this.navCtrl.navigateForward('login');
      }

    } catch (err) {
      console.error(err);
      var errorCode = err.code;
      var errorMessage = err.message;
      if (errorCode === 'auth/weak-password') {
        alert ('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    }
  }
}