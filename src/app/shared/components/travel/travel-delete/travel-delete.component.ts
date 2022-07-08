import { Router, ActivatedRoute } from "@angular/router";
import { TravelService } from "../travel.service";
import { Travel } from "../travel.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-travel-delete",
  templateUrl: "./travel-delete.component.html",
  styleUrls: ["./travel-delete.component.css"],
})
export class TravelDeleteComponent implements OnInit {
  travel: Travel | any;

  constructor(
    private travelService: TravelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.travelService.readById(id).subscribe((travel) => {
      this.travel = travel;
    });
  }

  deleteTravel(): void {
    this.travelService.delete(this.travel.id).subscribe(() => {
      this.travelService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/travels"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/travels"]);
  }
}
