import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokerHomeComponent } from './poker-home/poker-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokerDataService } from './services/pokerdata.service';

@NgModule({
  declarations: [
    AppComponent,
    PokerHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
