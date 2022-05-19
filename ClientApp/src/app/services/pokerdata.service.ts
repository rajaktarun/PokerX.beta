import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Game, PockerCard } from "../models/Game";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})

export class PokerDataService{

    activeGame:Game = <Game>{};
    constructor(private http: HttpClient){
    }
    private extractData(res: any) {
        let body = res;
        return body;
    }
    private handleErrorObservable(error: any) {
        console.error(error.message || error);
    
    }

    setActiveGame(game :Game){
        this.activeGame = game;
    }

    getActiveGame(){
        return this.activeGame;
    }

    public getData(url: string): Observable<string []>{
        return this.http.get<string []>(url);
    }

    public closeGame(gameId: string): Observable<Game>{
        return this.http.get<Game>(environment.closegameapi);
    }

    public launchNewGame(playerName: string): Observable<Game>{
        return this.http.get<Game>(environment.launchnewgameapi + "/"+ playerName);
    }

    SortCards(book:PockerCard[]): Observable<PockerCard[]> {
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
        });
        return this.http.post(environment.sortapi, book, { headers: httpHeaders }).pipe(
            map(this.extractData)
        );
    }
}