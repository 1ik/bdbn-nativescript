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
    } else if (this.category === "finance") {
      return [
        {
          "title": "Finance title 1",
          "details": "Finance Details 1",
        },
        {
          "title": "Finance title 2",
          "details": "Finance Details 2",
        }
      ]
    } else if (this.category === "sports") {
      return [
        {
          "title": "sports title 1",
          "details": "sports Details 1",
        },
        {
          "title": "sports title 2",
          "details": "sports Details 2",
        }
      ]
    } else if (this.category === "entertainment") {
      return [
        {
          "title": "entertainment title 1",
          "details": "entertainment Details 1",
        },
        {
          "title": "entertainment title 2",
          "details": "entertainment Details 2",
        }
      ]
    } else if (this.category === "technology") {
      return [
        {
          "title": "technology title 1",
          "details": "technology Details 1",
        },
        {
          "title": "technology title 2",
          "details": "technology Details 2",
        }
      ]
    } else if (this.category === "lifestyle") {
      return [
        {
          "title": "lifestyle title 1",
          "details": "lifestyle Details 1",
        },
        {
          "title": "lifestyle title 2",
          "details": "lifestyle Details 2",
        }
      ]
    } else if (this.category === "finance") {
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
