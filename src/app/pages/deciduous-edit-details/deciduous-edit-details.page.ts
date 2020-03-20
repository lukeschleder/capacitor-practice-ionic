

import { Component, OnInit } from '@angular/core';
import { DeciduousTree, DeciduousService } from 'src/app/services/deciduous.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-deciduous-edit-details',
  templateUrl: './deciduous-edit-details.page.html',
  styleUrls: ['./deciduous-edit-details.page.scss'],
})
export class DeciduousEditDetailsPage implements OnInit {
  // empty shell to hold information returned by getTree service
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
  // empty value to hold the params/ treeId of tree clicked
  treeId = null;

  photo: SafeResourceUrl;


  constructor(private deciduousService: DeciduousService, 
              private route: ActivatedRoute,
              private loadingController: LoadingController, 
              private nav: NavController,
              private sanitizer: DomSanitizer) { }
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

    this.deciduousService.getTree(this.treeId).subscribe(res => {
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
      this.deciduousService.updateTree(this.tree, this.treeId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home-deciduous');
      });
    } else {
      this.deciduousService.addTree(this.tree).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home-deciduous');
      });
    }

  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log(image, image.dataUrl);
    
  }

}
