import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class PokerDataService{

    constructor(private http: HttpClient){
    }
    private extractData(res: any) {
        let body = res;
        return body;
    }
    private handleErrorObservable(error: any) {
        console.error(error.message || error);
    
    }

    public getData(url: string): Observable<string []>{
        return this.http.get<string []>(url);
    }

    addBookWithObservable(book:string[]): Observable<string[]> {
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
        });
        return this.http.post("http://localhost:57467/api/Home/Test", book, { headers: httpHeaders }).pipe(
            map(this.extractData)
        );
    }
}