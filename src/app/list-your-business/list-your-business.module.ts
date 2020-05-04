import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ListYourBusinessPageRoutingModule } from './list-your-business-routing.module';
import {ComponentModule} from '../components/footer/components.module';
import { ListYourBusinessPage } from './list-your-business.page';
import {PopoverComponent } from '../components/popover/popover.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListYourBusinessPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentModule
  ],
  declarations: [ListYourBusinessPage ],
  entryComponents:[PopoverComponent]
})
export class ListYourBusinessPageModule {}
