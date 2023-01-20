import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverPageRoutingModule } from './cover-page-routing.module';
import { CoverPageComponent } from './cover-page.component';
import { ImageCoverComponent } from './image-cover/image-cover.component';
import { ContentIntroComponent } from './content-intro/content-intro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReusableComponentsModule } from 'src/app/shared/reusable-components/reusable-components.module';



@NgModule({
  declarations: [
    CoverPageComponent,
    ImageCoverComponent,
    ContentIntroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReusableComponentsModule,
    CoverPageRoutingModule
  ]
})
export class CoverPageModule { }
