import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faPhone } from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-parlour-details',
  templateUrl: './single-parlour-details.page.html',
  styleUrls: ['./single-parlour-details.page.scss'],
})
export class SingleParlourDetailsPage implements OnInit {

  value:string="Offers";
  searchIcon=faSearch;
  faUser = faUser;
  faPhone = faPhone;
  faMapMarkerAlt=faMapMarkerAlt
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
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev)
  {
    this.value=ev.target.value;
    
 
  }

}
