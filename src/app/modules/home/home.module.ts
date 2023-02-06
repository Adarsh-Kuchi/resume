import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EducationComponent } from './education/education.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReusableComponentsModule } from 'src/app/shared/reusable-components/reusable-components.module';
import { NavbarListComponent } from './navbar-list/navbar-list.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    HomeComponent,
    EducationComponent,
    NavbarListComponent,
    ExperienceComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReusableComponentsModule,
    FormsModule
  ]
})
export class HomeModule { }
