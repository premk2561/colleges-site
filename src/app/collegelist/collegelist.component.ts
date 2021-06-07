import { Component, Input, OnInit } from '@angular/core';
import {CollegedataService} from '../collegedata.service'

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent implements OnInit {

   searchTerm:any;

  constructor(private data:CollegedataService) { }

  collegelistdata:any=[];
  ngOnInit(): void {
  
    this.data.getcollegedata().subscribe
    (
      result=>
      {
        this.collegelistdata=result;
      }  
    )  
  }
  getmodal(ind:any)
  {
    modaldata:[]=this.collegelistdata[ind];
  }
}
