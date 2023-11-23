import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"login-form-af935","appId":"1:362727781423:web:6aeec5b6cdde7a611b02da","storageBucket":"login-form-af935.appspot.com","apiKey":"AIzaSyDSlk63UelrW2e9e6q-Ijf7Dja4dEXQZpg","authDomain":"login-form-af935.firebaseapp.com","messagingSenderId":"362727781423"})),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
