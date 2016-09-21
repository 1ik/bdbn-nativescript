import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
})
export class DetailsPage {
  newsItem : any = "";
  constructor(private navParams: NavParams) {
    this.newsItem = this.navParams.get("item");
    console.log(this.newsItem);
  }
  
}
