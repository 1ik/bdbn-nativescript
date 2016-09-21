import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

/*
  Generated class for the InternationalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/international/international.html',
  directives : [ListPage]
})
export class InternationalPage {

  category : string = "international";

  constructor(private navCtrl: NavController) {

  }

}
