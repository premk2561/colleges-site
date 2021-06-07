import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegedataService {

  constructor( private datatocollege:HttpClient) { }

    getcollegedata():Observable<[]>
    {
      return this.datatocollege.get<[]>("http://universities.hipolabs.com/search?country=United+States");
    }

}
