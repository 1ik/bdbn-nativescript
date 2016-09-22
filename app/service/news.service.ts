import {Injectable} from '@angular/core';
import {Observable} from 'Rxjs/rx';
import {Http, Response} from '@angular/http';

@Injectable()
export class NewsService{
     // get news list from server and return it
    
    constructor(private http : Http){

    }

  public getNewsListObservable(url : string) : any{
      return this.http.get(url)
        .map((response : Response) => {
            return response.json();
        }); 
        // .do((data) => {console.log(data)});
        // .catch(this.handleError);
  }

//   private handleError(error : Response){
//       console.error(error);
//       return Observable.throw(error.json().error || 'Server error!');
//   }

  public getNewsList(category : string): any {
    console.log("getNewsList() called");
    if (category == "national") {
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
    } else if (category == "international") {
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
    } else if (category === "finance") {
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
    } else if (category === "sports") {
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
    } else if (category === "entertainment") {
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
    } else if (category === "technology") {
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
    } else if (category === "lifestyle") {
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
    } else if (category === "finance") {
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