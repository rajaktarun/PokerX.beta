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
  textt="";
  bookName:string[]= [];
  constructor(private pokerService: PokerDataService,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public OnClick1()
  {
    this.serverId=20;
    this.pokerService.getData("http://localhost:57467/api/Home/Test").subscribe((data)=> {
      console.log(data)
      this.serverId=40;
    });  
  }

  OnClick2(){
    const promise = this.httpClient.get("http://localhost:57467/api/Home/Test").toPromise();
    console.log(promise);  
    promise.then((data)=>{
      this.textt = JSON.stringify(data)
      console.log(JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  OnClick() {
    this.pokerService.addBookWithObservable(["5H","3H"])
       .subscribe(book => {
          this.bookName = book;
          console.log(this.bookName)
       });
 }

}
