import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent {

  constructor(private api:ApiService){
    api.fetchPassengers().subscribe(
      (response)=>{
        this.passengers=response;
      }
    )
  }

  passengers:any=[]
}
