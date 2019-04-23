import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parse',
  templateUrl: './parse.component.html',
  styleUrls: ['./parse.component.css']
})
export class ParseComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit() {
    
  }

}
