import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';

/*
  Generated class for the LifestylePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/lifestyle/lifestyle.html',
  directives : [ListPage]
})
export class LifestylePage {

  category :string = "lifestyle";

  constructor(private navCtrl: NavController) {

  }

}
