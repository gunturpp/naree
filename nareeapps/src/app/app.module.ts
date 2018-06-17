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
import { Ionic2RatingModule } from 'ionic2-rating';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ApiProvider } from '../providers/api/api';
import { DataProvider } from '../providers/data/data';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { InvoicePage } from '../pages/invoice/invoice';
import { TiketPage } from '../pages/tiket/tiket';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { TambaheventPage } from '../pages/tambahevent/tambahevent';
import { RegistrasieventPage } from '../pages/registrasievent/registrasievent';
import { PembayaranPage }from '../pages/pembayaran/pembayaran';
import { DatapesertaPage } from '../pages/datapeserta/datapeserta';
import { KonfirmasipendaftaranPage } from '../pages/konfirmasipendaftaran/konfirmasipendaftaran';

@NgModule({
  declarations: [
    MyApp,
    AboutusPage,
    AchievementPage,
    KonfirmasipendaftaranPage,
    ContactusPage,
    EditprofilePage,
    MorePage,
    PengaturanPage,
    EventPage,
    DatapesertaPage,
    HomePage,
    TabsPage,
    InvoicePage,
    RewardPage,
    LoginPage,
    TiketPage,
    SignupPage,
    ProfilePage,
    ForgotpasswordPage,
    TesapiPage,
    CheckinDailyPage,
    CheckinEventPage,
    RegistrasieventPage,
    PembayaranPage,
    NewsPage,
    TambaheventPage,
    ShoweventPage,
    SmsotpPage,
    VerifcodePage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    // IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgProgressModule,
    Ionic2RatingModule,
     IonicModule.forRoot(MyApp, {
      backButtonIcon: "ios-undo",
     }) 
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
    ForgotpasswordPage,
    KonfirmasipendaftaranPage,
    MorePage,
    TambaheventPage,
    RegistrasieventPage,
    PengaturanPage,
    EventPage,
    RewardPage,
    HomePage,
    LoginPage,
    InvoicePage,
    NewsPage,
    TiketPage,    
    PembayaranPage,
    ShoweventPage,
    ProfilePage,
    SignupPage,
    DatapesertaPage,
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
