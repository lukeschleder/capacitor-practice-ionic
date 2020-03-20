// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-deciduous-details',
//   templateUrl: './deciduous-details.page.html',
//   styleUrls: ['./deciduous-details.page.scss'],
// })
// export class DeciduousDetailsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { DeciduousTree, DeciduousService } from 'src/app/services/deciduous.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-deciduous-details',
  templateUrl: './deciduous-details.page.html',
  styleUrls: ['./deciduous-details.page.scss'],
})
export class DeciduousDetailsPage implements OnInit {
  // creates empty shell to fill with data returned from getTree service
  tree: DeciduousTree = {
    name: '',
    scientificName: '',
    form: '',
    bark: '',
    leaf: '',
    seeds: '',
    range: '',
    imageUrl: '',
    fieldObservations: ''
  }
  // creates null vaiable that will be used to capture id params
  treeId = null;


  constructor(private coniferousService: DeciduousService, private route: ActivatedRoute,
     private loadingController: LoadingController, private nav: NavController) { }
  // grabs a snapshot of params which are the id of tree clicked on home page and creates treeId on details page
  ngOnInit() {
    this.treeId = this.route.snapshot.params['id'];
    if (this.treeId) {
      this.loadTree();
    }
  }
  // shows loading message if needed and then calls getTree with treeId to retreive info for just one tree
  async loadTree() {
    const loading = await this.loadingController.create({
      message: 'Loading Trees..'
    });
    await loading.present();

    this.coniferousService.getTree(this.treeId).subscribe(res => {
      loading.dismiss();
      this.tree = res;
      console.log(this.tree);
      
    });
  }

}
