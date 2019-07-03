import { Component, OnInit } from "@angular/core";
import { ChallengeService } from "src/app/services/challenge.service";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styleUrls: ["./challenge.component.scss"]
})
export class ChallengeComponent implements OnInit {
  public challengeForm;
  constructor(
    public challengeService: ChallengeService,
    public matchService: MatchService
  ) {}

  ngOnInit() {
    this.challengeForm = new FormGroup({
      opponent: new FormControl("", Validators.required)
    });
  }

  onSubmit(form: NgForm) {
    let myopponent = this.challengeForm.get("opponent").value;
    this.matchService.challengeAccepted = true;
    this.matchService.currentMatch.opponent = myopponent;
    //this.router.navigate(["search"]);
  }
}
