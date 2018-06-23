import { Component } from '@angular/core';

import { EventPage } from '../event/event';
import { RewardPage } from '../reward/reward';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  // tab3Root = RewardPage;
  tab4Root = ProfilePage;
  constructor() {

  }
}
