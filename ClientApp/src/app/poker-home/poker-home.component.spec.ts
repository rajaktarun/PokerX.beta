import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';
import { PokerDataService } from '../services/pokerdata.service';
import { PokerHomeComponent } from './poker-home.component';

describe('PokerHomeComponent', () => {
  let component: PokerHomeComponent;
  let fixture: ComponentFixture<PokerHomeComponent>;
  let mockPokerDataService = {
    launchNewGame(){
      return new Observable<Game>();
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerHomeComponent ],
      providers:[{
        provide:PokerDataService,
        useValue:mockPokerDataService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('game console should be enabled when enableConsole set to true', () => {
    component.enableConsole = true;
    fixture.detectChanges();
    let consoleSelector = fixture.nativeElement.querySelector("#gameconsole");
    expect(consoleSelector).toBeTruthy();;
  });

  it('game console should be null when enableConsole set to true', () => {
    component.enableConsole = false;
    fixture.detectChanges();
    let consoleSelector = fixture.nativeElement.querySelector("#gameconsole");
    expect(consoleSelector).toBeNull();
  });
});
