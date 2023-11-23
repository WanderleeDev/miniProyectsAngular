import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { DashboardDataComponent } from './components/dashboard-data/dashboard-data.component';
import { UserBtnComponent } from './components/user-btn/user-btn.component';
import { ImageSelectorComponent } from './components/image-selector/image-selector.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    NavbarComponent,
    MainComponent,
    HeaderPageComponent,
    DashboardDataComponent,
    UserBtnComponent,
    ImageSelectorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class AdminModule { }
