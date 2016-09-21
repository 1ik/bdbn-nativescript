import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: "list",
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {

  @Input("category")
  category: string;

  items: any;

  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {
    this.items = this.getList();
  }

  onListItemClick(item) {
    this.navCtrl.push(DetailsPage, {
      "item": item
    });
    console.log("List item clicked!\n" + item.details);
  }

  // get news list from server and return it
  getList(): any {
    console.log("getList() called");
    if (this.category == "national") {
      return [
        {
          "title": "national title 1",
          "details": "national Details 1",
        },
        {
          "title": "national title 2",
          "details": "national Details 2",
        }
      ]
    } else if (this.category == "international") {
      return [
        {
          "title": "international title 1",
          "details": "international Details 1",
        },
        {
          "title": "international title 2",
          "details": "international Details 2",
        }
      ]
    } else {
      return [
        {
          "title": "other title 1",
          "details": "other Details 1",
        },
        {
          "title": "other title 2",
          "details": "other Details 2",
        }
      ]
    }
  }
}
