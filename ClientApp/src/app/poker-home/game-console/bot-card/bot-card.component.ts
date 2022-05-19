import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Game';

@Component({
  selector: 'app-bot-card',
  templateUrl: './bot-card.component.html',
  styleUrls: ['./bot-card.component.css']
})
export class BotCardComponent implements OnInit {

  @Input() player:Player = <Player>{}
  constructor() { }

  ngOnInit(): void {
  }

  getIcon(path:string)
  {
    console.log(path);
    return "..\\assets\\"+ path;
  }

}
