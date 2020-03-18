import { Component, OnInit } from '@angular/core';
import { Tree, ConiferousService } from '../services/coniferous.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // creates array to hold information from db
  trees: Tree[];

  constructor(public navCtrl: NavController, private coniferousService: ConiferousService, public fAuth: AngularFireAuth) { }
  // calls getTrees function from coniferousService to populate home page
  ngOnInit() {
    this.coniferousService.getTrees().subscribe(res => {
      this.trees = res;
    });
  }
  // calls removeTree function from coniferousService on home page
  remove(item) {
    this.coniferousService.removeTree(item.id);
  }

  logout() {
    this.fAuth.auth.signOut();
    this.navCtrl.navigateForward('login');
  }

}
