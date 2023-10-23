import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutcomesInputComponent } from './outcomes-input/outcomes-input.component';
import { PairingsDisplayComponent } from './pairings-display/pairings-display.component';

@NgModule({
  declarations: [
    AppComponent,
    OutcomesInputComponent,
    PairingsDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
