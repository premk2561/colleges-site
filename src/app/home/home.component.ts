import { Component, OnInit } from '@angular/core';
import {CollegedataService} from '../collegedata.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:CollegedataService) { }

  counter:[]=[];

  ngOnInit(): void {
    this.data.getcollegedata().subscribe
    (
      result=>
      {
        this.counter=result;
       
      }
    )
  }
  

}

