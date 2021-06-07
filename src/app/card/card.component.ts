import { Component, OnInit } from '@angular/core';
import {CollegedataService} from '../collegedata.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private data:CollegedataService) { }

  cardsdata:[]=[];
  public searchTerm:any;

  ngOnInit(): void {
    this.data.getcollegedata().subscribe
    (
      result=>
      {
        this.cardsdata=result;
      }
    )
  }

}
