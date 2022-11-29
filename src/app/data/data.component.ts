import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  constructor(private api:ApiService){
    api.fetchData().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]

}
