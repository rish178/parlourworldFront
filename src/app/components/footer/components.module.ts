import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import {PopoverComponent} from '../popover/popover.component';

@NgModule ({
    declarations: [
		FooterComponent,
		PopoverComponent
	],
	exports: [
		FooterComponent,
		PopoverComponent
	]

})
export class ComponentModule{}