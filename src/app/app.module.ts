import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengersComponent } from './passengers/passengers.component';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserDataComponent } from './user-data/user-data.component';

const myRoute:Routes=[
  {
    path:"",
    component:PassengersComponent
  },
  {
    path:"data",
    component:DataComponent
  },
  {
    path:"info",
    component:UserInfoComponent
  },
  {
    path:"userda",
    component:UserDataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    DataComponent,
    UserInfoComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
