import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ImgSliderComponent,
    MainTitleComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
