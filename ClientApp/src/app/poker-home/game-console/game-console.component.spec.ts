import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokerDataService } from '../../services/pokerdata.service';
import { GameConsoleComponent } from './game-console.component';
import { Observable } from 'rxjs';
import { Game, PockerCard } from 'src/app/models/Game';

describe('GameConsoleComponent', () => {
  let component: GameConsoleComponent;
  let fixture: ComponentFixture<GameConsoleComponent>;
  let gamedata= {
    "gameId": "6604fc9c-e1ce-494c-b237-b4f3134389df",
    "players": [
      {
        "id": "38c1ddcb-a545-4a98-a743-a794a40aabe2",
        "name": "tarun",
        "type": 1,
        "cards": [
          {
            "name": "6S",
            "rank": 0,
            "iconPath": "Cards/SPADE-6.png"
          }
        ]
      },
      {
        "id": "1553f3ae-d2ef-439d-98c0-a52f8ad5d620",
        "name": "BOT1",
        "type": 0,
        "cards": [
          {
            "name": "KS",
            "rank": 0,
            "iconPath": "Cards/SPADE-K.png"
          }
        ]
      },
      {
        "id": "fb592cb5-5caa-4c11-a3fc-3619ccf8adb5",
        "name": "BOT2",
        "type": 0,
        "cards": [
          {
            "name": "10C",
            "rank": 0,
            "iconPath": "Cards/CLUB-10.png"
          }
        ]
      },
      {
        "id": "8a9650a6-d9e8-4297-b53b-4b11d67845bd",
        "name": "BOT3",
        "type": 0,
        "cards": [
          {
            "name": "5C",
            "rank": 0,
            "iconPath": "Cards/CLUB-5.png"
          }
        ]
      }
    ],
    "freeCards": [
      {
        "name": "3H",
        "rank": 0,
        "iconPath": "Cards/HEARTS-3.png"
      }
    ]
  };
  let mockPokerDataService = {
    SortCards(pokercards: PockerCard[]){
      return new Observable<PockerCard[]>();
    },
    getActiveGame(){
      return gamedata;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameConsoleComponent ],
      providers:[{
        provide:PokerDataService,
        useValue:mockPokerDataService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
