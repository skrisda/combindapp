import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage} from '@ionic/storage';
// Native device
import { Device } from '@ionic-native/device';


@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  
  email: any;
  uuid: any;
  model: any;
  serial: any;
  platform: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage:Storage,
    private device: Device,
    public alert: AlertController) {
    //สร้างตัวแปรเก็บลง strorage
    this.storage.set('myemail','suwankarn@gmail.com');
    //การเรียกตัวแปร Storage มาใช้งาน
    this.storage.get('myemail').then((result) =>{
      this.email = result;
    });
    //device
    this.uuid = this.device.uuid;
    this.model = this.device.version;
    this.serial = this.device.serial;
    this.platform = this.device.platform;
  }

  ionViewDidLoad() {
    /*
    let alert = this.alert.create({
      title: 'ข้อมูลเครื่อง',
      subTitle: 'uuid:'+ this.uuid +'<br>'+
      'model:' + this.model +'<br>' + 
      'Platform:' + this.platform + '<br>'+
      'Serial:' + this.serial,
      buttons: ['Dismiss']
    });
    alert.present(); */
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}
