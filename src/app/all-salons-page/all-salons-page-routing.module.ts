import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSalonsPagePage } from './all-salons-page.page';

const routes: Routes = [
  {
    path: '',
    component: AllSalonsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSalonsPagePageRoutingModule {}
