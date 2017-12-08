import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MembresModule } from './membres/membres.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MembresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
