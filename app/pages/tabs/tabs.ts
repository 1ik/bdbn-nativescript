import { Component } from '@angular/core';
import { NationalPage } from '../national/national';
import { InternationalPage } from '../international/international';
import { FinancePage } from '../finance/finance';
import { SportsPage } from '../sports/sports';
import { EntertainmentPage } from '../entertainment/entertainment';
import { TechnologyPage} from '../technology/technology';
import { LifestylePage} from '../lifestyle/lifestyle';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;
  public tab5Root: any;
  public tab6Root: any;
  public tab7Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = NationalPage;
    this.tab2Root = InternationalPage;
    this.tab3Root = FinancePage;
    this.tab4Root = SportsPage;
    this.tab5Root = EntertainmentPage;
    this.tab6Root = TechnologyPage;
    this.tab7Root = LifestylePage;
  }
}
