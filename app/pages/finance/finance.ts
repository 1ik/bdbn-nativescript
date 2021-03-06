import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';

/*
  Generated class for the FinancePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/finance.html',
  directives : [ListPage]
})
export class FinancePage {

  category : string = "finance";
  
  constructor(private navCtrl: NavController) {

  }

}
