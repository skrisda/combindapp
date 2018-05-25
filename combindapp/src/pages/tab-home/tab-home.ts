import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage} from '@ionic/storage';
/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  
  email: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    //สร้างตัวแปรเก็บลง strorage
    this.storage.set('myemail','suwankarn@gmail.com');
    //การเรียกตัวแปร Storage มาใช้งาน
    this.storage.get('myemail').then((result) =>{
      this.email = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}
