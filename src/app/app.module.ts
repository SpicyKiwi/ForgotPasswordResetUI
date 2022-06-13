import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondScreenComponent,
    ThirdScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
