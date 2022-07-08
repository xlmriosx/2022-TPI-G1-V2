import { Travel } from '../travel.model';
import { TravelService } from '../travel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.css']
})
export class TravelCreateComponent implements OnInit {

  travel: Travel = {
    url: '',
    descripcion: '',
    travelTime : '',
    travelDate : '',
    rating: 0.0,
    travelHour : '',
    localization : '',
    service : '',
    type : '',
    company : '',
    tickets: [{numberTravel:0, position: ''}]
  }

  constructor(private travelService: TravelService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createTravel(): void {
    this.travelService.create(this.travel).subscribe(() => {
      this.travelService.showMessage('Produto criado!')
      this.router.navigate(['/travels'])
    })

  }

  cancel(): void {
    this.router.navigate(['/travels'])
  }
}
