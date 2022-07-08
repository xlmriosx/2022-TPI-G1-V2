import { Matches } from '../matches.model';
import { MatchesService } from '../matches.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-create',
  templateUrl: './matches-create.component.html',
  styleUrls: ['./matches-create.component.css']
})
export class MatchesCreateComponent implements OnInit {

  matches: Matches = {
    url: '',
    vistTeam: '',
    localTeam: '',
    matchDate: '',
    matchTime: '',
    stadium: '',
  }

  constructor(private matchesService: MatchesService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createMatches(): void {
    this.matchesService.create(this.matches).subscribe(() => {
      this.matchesService.showMessage('Produto criado!')
      this.router.navigate(['/matchess'])
    })

  }

  cancel(): void {
    this.router.navigate(['/matchess'])
  }
}
