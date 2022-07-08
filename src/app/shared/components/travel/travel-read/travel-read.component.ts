import { TravelService } from '../travel.service';
import { Travel } from '../travel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-read',
  templateUrl: './travel-read.component.html',
  styleUrls: ['./travel-read.component.css']
})
export class TravelReadComponent implements OnInit {

  travels: Travel[] | any
  displayedColumns = [
    'descripcion', 'travelTime', 'rating','travelHour','localization',
    'service','type','company','tickets'
  ]
  
  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.read().subscribe(travels => {
      this.travels = travels
    })
  }

}
