import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';

/*
  Generated class for the SportsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl : 'build/pages/sports/sports.html',
  directives : [ListPage]
})
export class SportsPage {

  category : string = "sports";

  constructor(private navCtrl: NavController) {

  }

}
