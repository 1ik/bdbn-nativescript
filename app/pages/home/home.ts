import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list'

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives : [ListPage]
  
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  
  }
}
