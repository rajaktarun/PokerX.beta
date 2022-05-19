import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokerHomeComponent } from './poker-home/poker-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokerDataService } from './services/pokerdata.service';
import { GameConsoleComponent } from './poker-home/game-console/game-console.component';
import { BotCardComponent } from './poker-home/game-console/bot-card/bot-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokerHomeComponent,
    GameConsoleComponent,
    BotCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokerDataService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
