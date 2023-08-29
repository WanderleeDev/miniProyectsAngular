import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectivesComponent } from './shared/directives/directives.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ListComponent } from './components/navbar/components/list/list.component';
import { LoginBoxComponent } from './components/navbar/components/login-box/login-box.component';
import { SubListComponent } from './components/navbar/components/sub-list/sub-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectivesComponent,
    FooterComponent,
    LogoComponent,
    ListComponent,
    LoginBoxComponent,
    SubListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
