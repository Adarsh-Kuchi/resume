import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SubjectComponent } from './subject/subject.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReusableComponentsModule } from 'src/app/shared/reusable-components/reusable-components.module';
import { NavbarListComponent } from './navbar-list/navbar-list.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    SubjectComponent,
    NavbarListComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReusableComponentsModule,
    FormsModule
  ]
})
export class HomeModule { }
