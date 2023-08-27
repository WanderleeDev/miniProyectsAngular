import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputBaseComponent } from './shared/components/input-base/input-base.component';
import { MainTitleComponent } from './shared/components/main-title/main-title.component';
import { ListComponent } from './shared/components/list/list.component';
import { HamburgerBtnComponent } from './components/hamburger-btn/hamburger-btn.component';
import { LoginComponent } from './components/login/login.component';
import { BtnBaseComponent } from './shared/components/btn-base/btn-base.component';
import { HelpFinderComponent } from './components/help-finder/help-finder.component';
import { CardComponent } from './shared/components/card/card.component';
import { GalleryHelpComponent } from './components/gallery-help/gallery-help.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InputBaseComponent,
    MainTitleComponent,
    ListComponent,
    HamburgerBtnComponent,
    LoginComponent,
    BtnBaseComponent,
    HelpFinderComponent,
    CardComponent,
    GalleryHelpComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
