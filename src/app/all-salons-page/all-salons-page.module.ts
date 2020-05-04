import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSalonsPagePageRoutingModule } from './all-salons-page-routing.module';

import { AllSalonsPagePage } from './all-salons-page.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSalonsPagePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AllSalonsPagePage]
})
export class AllSalonsPagePageModule {}
