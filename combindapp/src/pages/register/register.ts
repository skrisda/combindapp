import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userData = {
    "fullname": "",
    "email": "",
    "password": "",
    "tel": "",
    "profile": ""
  };
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webService: WebapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    //alert(JSON.stringify(this.userData));
    this.webService.postData(this.userData, "signup.php").then((result) => {
      this.responseData = result;
      if (this.responseData.success) {
        alert("ลงทะเบียนเรียบร้อย");
      } else {
        alert("มีข้อผิดพลาดบางอย่าง ลงทะเบียนไม่สำเร็จ");
      }
    });
  }
}
