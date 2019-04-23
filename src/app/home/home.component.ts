import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:AppService) { }
  called:boolean=false;
  data:any;
  feed:any;
  errorMsg:string;
  error:boolean=false;
  item:any;
  ngOnInit() {
    this.called=false;
  }

  //To Search URL
  searchURL(form:NgForm){
    this.service.getJSON(form.value.name).subscribe(
      success=>{
        this.called=true;
        this.data=success;
        this.feed=this.data.feed;
        this.item=this.data.items;
        console.log(this.data)
      },
      error=>{
        this.called=true;
        this.error=true;
        this.errorMsg="No details found!!"
      }
    )
  }

  //To display search bar again
  callAgain(){
    this.called=false;
    this.error=false;
  }
}
