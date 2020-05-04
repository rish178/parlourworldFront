import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import{SignupPage} from '../signup/signup.page';
import {SignupPageModule} from '../signup/signup.module';
import {ListYourBusinessPageModule} from '../list-your-business/list-your-business.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '../components/footer/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SignupPageModule, 
    FontAwesomeModule,
    HttpClientModule,
    ComponentModule,
    ListYourBusinessPageModule
  ],
  declarations: [HomePage],
 

})
export class HomePageModule {}
