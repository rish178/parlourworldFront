import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {SignupPage} from '../signup/signup.page';
import { NavController } from '@ionic/angular';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {CommonServiceService} from '../common-service.service';
import {ApiUrlService} from '../api-url.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  hide="none";
  show="block";
  toggleShowMore=true;
  searchIcon=faSearch;
  faUser = faUser;
  salonData:any="";
  categories =
  [
    {
      name:"Hair Spa",
      src:"../../assets/icon/beauty.svg"
    },
   
    {
      name: "Facial",
      src :"../../assets/icon/facial1.svg" 
    },
    {
      name: "Waxing",
      src:"../../assets/icon/wax.svg"
    },
    {
      name:"Mani/Pedi",
      src:"../../assets/icon/nail-polish.svg"
    },
    {
      name:"Hair color",
      src:"../../assets/icon/hair-color.svg"
    },
    {
      name:"Make Up",
      src:'../../assets/icon/makeover.svg'
    },
    {
      name:" Hair Straightening",
      src:'../../assets/icon/hair-straightener.svg'
    },
    {
      name:"Haircut",
      src:"../../assets/icon/salon.svg"
    },
    {
      name:"Shave",
      src:"../../assets/icon/shaving-brush.svg"
    },
   
]

slideOpts = {
  grabCursor: true,
  slidesPerView:2,
  spaceBetween:1,
  allowSlidePrev:true,
  autoplay:true,
  flipEffect: {
    rotate: 30,
    slideShadows: false,
  },
}
// trans = false;
  constructor(public modalCtrl : ModalController , public navCtrl : NavController,
     public common : CommonServiceService ,
     public apiService : ApiUrlService,
     public http : HttpClient
    ) { }

  ngOnInit() {
    const apiUrl = this.apiService.getUrl('/user/salons');
    console.log(apiUrl);
    
   const res = this.http.get(apiUrl);

    
    res.subscribe(data=>{
      console.log(data);
      
      this.loadSalons(data);
  })
} 

  async presentModal(param) {
    const modal = await this.modalCtrl.create({
      component: SignupPage,
      cssClass: "wideModal",
      componentProps: {
        registerFlag : param 
      }
    });
    // this.trans = true;
    return await modal.present();



  }
  loadSalons(data)
  {
    this.salonData=data
  }
  goToAllOffers(){

    this.navCtrl.navigateForward('all-salons-page');

  }

 goToSingleParlour(){

  this.navCtrl.navigateForward('single-parlour-details');
 }
 goToListBussiness(){
  this.navCtrl.navigateForward('list-your-business');
}

showMore()
{
  this.hide="block";

  this.toggleShowMore=false;
  
}
showLess()
{
  this.hide="none";
  this.toggleShowMore=true;
}

}

