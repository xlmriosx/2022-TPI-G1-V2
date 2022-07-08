import { MatchesService } from '../matches.service';
import { Matches } from '../matches.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-read',
  templateUrl: './matches-read.component.html',
  styleUrls: ['./matches-read.component.css']
})
export class MatchesReadComponent implements OnInit {

  matchess: Matches[] | any
  displayedColumns = [
    'vistTeam','localTeam','matchDate','matchTime','stadium'
  ]
  
  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matchesService.read().subscribe(matchess => {
      this.matchess = matchess
    })
  }

}
