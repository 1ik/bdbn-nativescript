import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {NewsService} from '../../service/news.service'
import 'rxjs/rx';
import {HTTP_PROVIDERS} from '@angular/http';

/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: "list",
  templateUrl: 'build/pages/list/list.html',
  providers : [NewsService, HTTP_PROVIDERS]
})
export class ListPage {

  @Input("category")
  category: string;

  items: any;

  constructor(private navCtrl: NavController,private newsService : NewsService) {

  }

  ngOnInit() {
     this.newsService.getNewsListObservable(this.buildUrl(this.category))
      .subscribe(
        (items => {this.items = items}),
        (error) => {console.log(error)}
      )
}

  buildUrl(category : string) : string{
    return `http://api.bdbn.news/categories/${category}?sources=palo&start=1&size=10&v=0.3`;
  } 

  onListItemClick(item) {
    this.navCtrl.push(DetailsPage, {
      "item": item
    });
    console.log("List item clicked!\n" + item.details);
  }

 
}
