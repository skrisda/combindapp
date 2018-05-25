import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, Toast, ToastController } from 'ionic-angular'; // เพิ่ม Toast
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { CoursedetailPage } from '../coursedetail/coursedetail';
import { AlertController } from 'ionic-angular';

// Network
import { Network } from '@ionic-native/network'


@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {
  responseData: any;
  responseNotfound: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webService: WebapiServiceProvider,
    public Network: Network,
    public toast: ToastController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    if (this.Network.type !== 'none') { // ถ้าต่อ Network ไว้
      this.webService.getData("feed_course.php").then((result) => {
        console.log(result);
        this.responseData = result;
      }, (error) => {
        if (error.status == 0) {
          /*this.toast.create({
            message: 'มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server',
            duration: 3000
          }).present();*/
          let alert = this.alertCtrl.create({
            title: 'มีข้อผิดพลาด',
            subTitle: 'มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server',
            buttons: ['Dismiss']
          });
          alert.present();
        }
      });
    } else {
      // show Message No network
      this.toast.create({
        message: 'โปรดตรวจสอบการเชื่อมต่ออินเตอร์เน็ต',
        duration: 3000
      }).present();
    }
  }

  //ถ้าต้องการให้โหลดทุกครั้งที่เข้าเมนู Course ใช้
  //ionViewDidEnter(){ 
  //}

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.webService.getData("feed_course.php").then((result) => {
        console.log(result);
        this.responseData = result;
      }, (error) => {
        this.responseNotfound = "มีบางอย่างผิดพลาดจาก Server";
        console.log(error);
      })
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  courseDetail(cid) {
    this.navCtrl.push(CoursedetailPage, {
      cid: cid
    });
  }
}
