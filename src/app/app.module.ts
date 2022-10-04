import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB1vLk8rXmhfnZVGcB7v0AVSPmW7hXrkjg",
      authDomain: "fapan-entregas-2a4ee.firebaseapp.com",
      projectId: "fapan-entregas-2a4ee",
      storageBucket: "fapan-entregas-2a4ee.appspot.com",
      messagingSenderId: "250544020590",
      appId: "1:250544020590:web:1e276ff944bfab3dd2da7f"
     }),
     AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
