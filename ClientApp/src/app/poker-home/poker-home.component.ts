import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokerDataService } from '../services/pokerdata.service'

@Component({
  selector: 'app-poker-home',
  templateUrl: './poker-home.component.html',
  styleUrls: ['./poker-home.component.css']
})
export class PokerHomeComponent implements OnInit {

  serverId= 10;
  playerName="";
  enableConsole:boolean = false;
  bookName:string[]= [];
  constructor(private pokerService: PokerDataService,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('..\assets\background.jpg')";
  }

gameid="";
  launchNewGame()
  {
    this.enableConsole = false;
    this.serverId=20;
    this.pokerService.launchNewGame(this.playerName).subscribe((data)=> {
      console.log(data);
      this.gameid = data.gameId
      this.pokerService.setActiveGame(data);
      this.enableConsole = true;
    });  
  }
}
