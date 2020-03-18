import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// typescipt that adds interface to firebase files
export interface Tree {
  name: string;
  scientificName: string;
  form: string;
  bark: string;
  leaf: string;
  seeds: string;
  range: string;
  imageUrl: string;
  fieldObservations: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConiferousService {
  // reference to angularfirestore collection that holds elments of the type Tree
  private treesCollection: AngularFirestoreCollection<Tree>;
  // observable with array of tree elements
  private trees: Observable<Tree[]>;
  // reference to database
  constructor( db: AngularFirestore) {
    this.treesCollection = db.collection<Tree>('trees');

    // listens for actions and grabs the id of that object
    this.trees = this.treesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  // returns observable array of trees
  getTrees() {
    return this.trees;
  }
  // will get tree of specific id
  getTree(id) {
    return this.treesCollection.doc<Tree>(id).valueChanges();
  }
  // will update Tree identified by id
  updateTree(tree: Tree, id: string) {
    return this.treesCollection.doc(id).update(tree);
  }
  // will add new tree to tree list
  addTree(tree: Tree) {
    return this.treesCollection.add(tree);
  }
  // will delete tree from tree list
  removeTree(id) {
    return this.treesCollection.doc(id).delete();
  }

}
