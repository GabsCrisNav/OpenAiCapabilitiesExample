import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { Textdavinci001Component } from './textdavinci001/textdavinci001.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModerationsComponent } from './moderations/moderations.component';
import { ImagesgenerationComponent } from './imagesgeneration/imagesgeneration.component';


@NgModule({
  declarations: [
    AppComponent,
    Textdavinci003Component,
    Textdavinci001Component,
    ModerationsComponent,
    ImagesgenerationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
