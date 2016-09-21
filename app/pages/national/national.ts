import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list'

@Component({
  templateUrl: 'build/pages/national/national.html',
  directives : [ListPage] 
})
export class NationalPage {

  category = "national";

  constructor(public navCtrl: NavController) {
  
  }
}
