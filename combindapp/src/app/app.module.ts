import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Native device
import { Device } from '@ionic-native/device';

// Network
import { Network} from '@ionic-native/network'

// Storage
import { IonicStorageModule} from '@ionic/storage';

// Import http module
import { HttpModule} from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

// หน้า side menu
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
// หน้า Tab menu
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { RegisterPage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabArticlePage,
    TabContactPage,
    TabCoursePage,
    TabHomePage,
    TabServicePage,
    TabsPage,
    CoursedetailPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot() //forRoot ให้ใช้งานได้ตั้งแต่หน้าแรกเลย
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabArticlePage,
    TabContactPage,
    TabCoursePage,
    TabHomePage,
    TabServicePage,
    TabsPage,
    CoursedetailPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    Network,    // ถ้าเป็น Native api ใส่ใน provider
    Device
  ]
})
export class AppModule {}
