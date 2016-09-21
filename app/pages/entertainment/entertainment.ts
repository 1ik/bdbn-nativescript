import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
/*
  Generated class for the EntertainmentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/entertainment/entertainment.html',
  directives : [ListPage]
})
export class EntertainmentPage {

  category : string = "entertainment";

  constructor(private navCtrl: NavController) {

  }

}
