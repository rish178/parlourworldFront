import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-salons-page',
  templateUrl: './all-salons-page.page.html',
  styleUrls: ['./all-salons-page.page.scss'],
})
export class AllSalonsPagePage implements OnInit {
  searchIcon=faSearch;
  faUser = faUser;
  toggle:boolean = false;
  public form = [
    { val: 'New Delhi', isChecked: true },
    { val: 'Jaipur', isChecked: false },
    { val: 'Chandigarh', isChecked: false },
    { val: 'New Delhi', isChecked: true },
    { val: 'Jaipur', isChecked: false },
    { val: 'Chandigarh', isChecked: false },
    { val: 'New Delhi', isChecked: true },
    { val: 'Jaipur', isChecked: false },
    { val: 'Chandigarh', isChecked: false },
    { val: 'New Delhi', isChecked: true },
    { val: 'Jaipur', isChecked: false },
    { val: 'Chandigarh', isChecked: false }
  ];

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  toggleOn(){
    this.toggle=true;
  }
  goToSinglePage(){
    this.navCtrl.navigateForward('single-parlour-details');
  }

}
