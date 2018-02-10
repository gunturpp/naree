import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { EventPage } from '../pages/event/event';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { RewardPage } from '../pages/reward/reward';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    EventPage,
    HomePage,
    TabsPage,
    RewardPage,
    LoginPage,
    SignupPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventPage,
    RewardPage,
    HomePage,
    LoginPage,
    ProfilePage,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
