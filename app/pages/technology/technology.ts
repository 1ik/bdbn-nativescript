import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';

/*
  Generated class for the TechnologyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/technology/technology.html',
  directives : [ListPage]
})
export class TechnologyPage {

  category = "technology";

  constructor(private navCtrl: NavController) {

  }

}
