import { HeaderService } from '../../shared/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Travel',
      icon: 'storefront',
      routeUrl: 'travels'
    }
  }

  ngOnInit(): void {
  }

  navigateToTravelsCreate(): void {
    this.router.navigate(['/travels/create'])
  }

}