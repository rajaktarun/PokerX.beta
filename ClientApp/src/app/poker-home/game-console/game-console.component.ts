import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game, Player } from 'src/app/models/Game';
import { PokerDataService } from 'src/app/services/pokerdata.service';

@Component({
  selector: 'app-game-console',
  templateUrl: './game-console.component.html',
  styleUrls: ['./game-console.component.css']
})
export class GameConsoleComponent implements OnInit {
  activeGame:Game = <Game>{};

  players:Player[] = [];
  player1:Player=<Player>{};
  player2:Player=<Player>{};
  player3:Player=<Player>{};
  player4:Player=<Player>{};
  constructor(private pokerService: PokerDataService,
    private httpClient: HttpClient) { }

    showcards:boolean=true;

  ngOnInit(): void {
    this.activeGame = this.pokerService.getActiveGame();
    this.players= this.activeGame.players;

    this.player1 = this.activeGame.players[0];
    this.player2 = this.activeGame.players[1];
    this.player3 = this.activeGame.players[2];
    this.player4 = this.activeGame.players[3];
    console.log(this.player1 );
  }

  getIcon(path:string)
  {
    console.log(path);
    return "..\\assets\\"+ path;
  }


  endGame()
  {
    this.pokerService.closeGame(this.activeGame.gameId).subscribe((data)=> {

    });  
    window.location.reload();
  }
  sortPlayerCAard()
  {
    this.showcards = false;
     this.pokerService.SortCards(this.player1.cards).subscribe(cards => {
      this.player1.cards = cards;
      this.showcards=true;
      console.log(cards)
   });
  }

}
