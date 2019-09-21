import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PingService} from "../../services/ping.service";
import {Ping} from "../../model/ping";
import {isUndefined} from "util";

@Component({
  selector: 'ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.sass'],
  providers: [PingService]
})
export class PingComponent {

  pingForm: FormGroup;
  public pingResult:String


  constructor(
    public router: Router,
    public pingService: PingService,
    formBuilder: FormBuilder,
  ) {
    this.pingForm = formBuilder.group({
      ping: ['', [Validators.required]]
    });
  }

  createPing() {
    if (this.pingForm.valid) {
      this.pingService.makeAPing(this.pingForm.value.ping).subscribe(
        { next: this.pingMaked,
            error: this.manageError
        }

      )}
  }

  pingMaked(ping):void {
    this.pingResult = ping.myGreeting;
  }



  manageError(error: Error) {
    console.log(error);
  }

  isNotValidForm() {
    return !this.pingForm.valid;
  }

  cleanMessage() {
    this.pingResult ='';
    this.pingForm.controls['ping'].reset();
  }

  formIsClean() {
    return this.pingForm.value.ping === null;
  }
}
