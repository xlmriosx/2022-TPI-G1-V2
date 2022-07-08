import { HeaderService } from '../../shared/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Matches',
      icon: 'storefront',
      routeUrl: 'matchess'
    }
  }

  ngOnInit(): void {
  }

  navigateToMatchessCreate(): void {
    this.router.navigate(['/matchess/create'])
  }

}