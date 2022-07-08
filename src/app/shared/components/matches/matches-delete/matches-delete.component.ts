import { Router, ActivatedRoute } from "@angular/router";
import { MatchesService } from "../matches.service";
import { Matches } from "../matches.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-matches-delete",
  templateUrl: "./matches-delete.component.html",
  styleUrls: ["./matches-delete.component.css"],
})
export class MatchesDeleteComponent implements OnInit {
  matches: Matches | any;

  constructor(
    private matchesService: MatchesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchesService.readById(id).subscribe((matches) => {
      this.matches = matches;
    });
  }

  deleteMatches(): void {
    this.matchesService.delete(this.matches.id).subscribe(() => {
      this.matchesService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/matchess"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/matchess"]);
  }
}
