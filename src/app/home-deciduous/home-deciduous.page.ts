import { Component, OnInit } from '@angular/core';
import { DeciduousTree, DeciduousService } from '../services/deciduous.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-deciduous',
  templateUrl: './home-deciduous.page.html',
  styleUrls: ['./home-deciduous.page.scss'],
})
export class HomeDeciduousPage implements OnInit {
  // creates array to hold information from db
  trees: DeciduousTree[];

  constructor(public routerModule: RouterModule, public navCtrl: NavController, private deciduousService: DeciduousService, public fAuth: AngularFireAuth) { }
  // calls getTrees function from coniferousService to populate home page
  ngOnInit() {
    this.deciduousService.getTrees().subscribe(res => {
      this.trees = res;
    });
  }
  // calls removeTree function from coniferousService on home page
  remove(item) {
    this.deciduousService.removeTree(item.id);
  }

  logout() {
    this.fAuth.auth.signOut();
    this.navCtrl.navigateForward('login');
  }

}