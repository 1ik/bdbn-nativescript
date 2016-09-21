import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector : "list",
  templateUrl: 'build/pages/list/list.html',
})
export class ListPage {

  items = [
    {
      "title" : "News title 1", 
      "details" : "News Details 1",
    },
    {
      "title" : "News title 2", 
      "details" : "News Details 2",
    }
  ]

  constructor(private navCtrl: NavController) {

  }

  onListItemClick(item){
    this.navCtrl.push(DetailsPage,{
      "item" : item
    });
    console.log("List item clicked!\n"+item.details);
  }

}
