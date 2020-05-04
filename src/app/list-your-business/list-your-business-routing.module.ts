import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListYourBusinessPage } from './list-your-business.page';

const routes: Routes = [
  {
    path: '',
    component: ListYourBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListYourBusinessPageRoutingModule {}
