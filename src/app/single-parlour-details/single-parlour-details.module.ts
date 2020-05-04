import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleParlourDetailsPageRoutingModule } from './single-parlour-details-routing.module';

import { SingleParlourDetailsPage } from './single-parlour-details.page';
import {SignupPageModule} from '../signup/signup.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleParlourDetailsPageRoutingModule,
    SignupPageModule,
    FontAwesomeModule
  ],
  declarations: [SingleParlourDetailsPage]
})
export class SingleParlourDetailsPageModule {}
