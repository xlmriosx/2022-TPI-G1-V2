import { Matches } from "../matches.model";
import { Router, ActivatedRoute } from "@angular/router";
import { MatchesService } from "../matches.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-matches-update",
  templateUrl: "./matches-update.component.html",
  styleUrls: ["./matches-update.component.css"],
})
export class MatchesUpdateComponent implements OnInit {
  matches: Matches|any;

  constructor(
    private matchesService: MatchesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.matchesService.readById(id).subscribe((matches) => {
      this.matches = matches;
    });
  }

  updateMatches(): void {
    this.matchesService.update(this.matches).subscribe(() => {
      this.matchesService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/matchess"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/matchess"]);
  }
}
