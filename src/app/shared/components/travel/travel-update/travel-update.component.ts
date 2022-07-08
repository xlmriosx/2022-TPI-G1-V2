import { Travel } from "../travel.model";
import { Router, ActivatedRoute } from "@angular/router";
import { TravelService } from "../travel.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-travel-update",
  templateUrl: "./travel-update.component.html",
  styleUrls: ["./travel-update.component.css"],
})
export class TravelUpdateComponent implements OnInit {
  travel: Travel|any;

  constructor(
    private travelService: TravelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.travelService.readById(id).subscribe((travel) => {
      this.travel = travel;
    });
  }

  updateTravel(): void {
    this.travelService.update(this.travel).subscribe(() => {
      this.travelService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/travels"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/travels"]);
  }
}
