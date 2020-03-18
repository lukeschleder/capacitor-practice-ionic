import { Component, OnInit } from '@angular/core';
import { Tree, ConiferousService } from 'src/app/services/coniferous.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.page.html',
  styleUrls: ['./edit-details.page.scss'],
})
export class EditDetailsPage implements OnInit {
  // empty shell to hold information returned by getTree service
  tree: Tree = {
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
  // empty value to hold the params/ treeId of tree clicked
  treeId = null;


  constructor(private coniferousService: ConiferousService, private route: ActivatedRoute,
     private loadingController: LoadingController, private nav: NavController) { }
  // grabs params and sets to treeId and then calls loadTree function
  ngOnInit() {
    this.treeId = this.route.snapshot.params['id'];
    if (this.treeId) {
      this.loadTree();
    }
  }
  // loading message if needed and then runs getTree function to return tree object with treeId
  async loadTree() {
    const loading = await this.loadingController.create({
      message: 'Loading Trees..'
    });
    await loading.present();

    this.coniferousService.getTree(this.treeId).subscribe(res => {
      loading.dismiss();
      this.tree = res;
    });
  }
  // loading message if needed and then updates tree object if exists or creates new object if it does not
  async saveTree() {
    const loading = await this.loadingController.create({
      message: 'Saving Tree..'
    });
    await loading.present();

    if (this.treeId) {
      this.coniferousService.updateTree(this.tree, this.treeId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.coniferousService.addTree(this.tree).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }

  }

}
