
import { Component, OnInit } from '@angular/core';
import {CollegedataService} from '../collegedata.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private data:CollegedataService) { }

  cardsdata:any=[];
  searchTerm:any;

  colors:string[]=['info','success','warning','danger','dark','primary','secondary','light'];

  ngOnInit(): void {
    this.data.getcollegedata().subscribe
    (
      result=>
      {
        this.cardsdata=result;
        console.log(this.cardsdata);
      }
    )
  }

}
