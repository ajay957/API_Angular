import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengersComponent } from './passengers/passengers.component';

const myRoute:Routes=[
  {
    path:"",
    component:PassengersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
