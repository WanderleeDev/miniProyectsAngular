import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardFlagComponent } from './components/card-flag/card-flag.component';
import { HomeComponent } from './views/home/home.component';
import { FlagSectionComponent } from './views/flag-section/flag-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnBackComponent } from './components/btn-back/btn-back.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownFilterComponent,
    SearchBoxComponent,
    CardFlagComponent,
    HomeComponent,
    FlagSectionComponent,
    NavbarComponent,
    BtnBackComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
