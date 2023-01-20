import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModesComponent } from './header-modes/header-modes.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    HeaderModesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderModesComponent
  ],
  providers: []
})
export class ReusableComponentsModule { }
