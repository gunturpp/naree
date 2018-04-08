import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { HttpClientModule } from '@angular/common/http';
import { EventPage } from '../pages/event/event';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { RewardPage } from '../pages/reward/reward';
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { AchievementPage } from '../pages/achievement/achievement';
import { ContactusPage } from '../pages/contactus/contactus';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { MorePage } from '../pages/more/more';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { ShoweventPage } from '../pages/showevent/showevent';
import { TesapiPage } from '../pages/tesapi/tesapi';
import { SmsotpPage } from '../pages/smsotp/smsotp';
import { VerifcodePage } from '../pages/verifcode/verifcode';
import { CheckinDailyPage } from '../pages/checkin-daily/checkin-daily';
import { CheckinEventPage } from '../pages/checkin-event/checkin-event';
import { NgProgressModule} from 'ng2-progressbar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ApiProvider } from '../providers/api/api';
import { DataProvider } from '../providers/data/data';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    MyApp,
    AboutusPage,
    AchievementPage,
    ContactusPage,
    EditprofilePage,
    MorePage,
    PengaturanPage,
    EventPage,
    HomePage,
    TabsPage,
    RewardPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    TesapiPage,
    CheckinDailyPage,
    CheckinEventPage,
    NewsPage,
    ShoweventPage,
    SmsotpPage,
    VerifcodePage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgProgressModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutusPage,
    AchievementPage,
    ContactusPage,
    EditprofilePage,
    CheckinDailyPage,
    CheckinEventPage,
    MorePage,
    PengaturanPage,
    EventPage,
    RewardPage,
    HomePage,
    LoginPage,
    NewsPage,
    ShoweventPage,
    ProfilePage,
    SignupPage,
    TabsPage,
    TesapiPage,
    SmsotpPage,
    VerifcodePage
  ],
  providers: [
    StatusBar,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ApiProvider,
    DataProvider
  ]
})
export class AppModule {}
