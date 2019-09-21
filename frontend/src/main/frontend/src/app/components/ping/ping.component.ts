import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PingService} from "../../services/ping.service";

@Component({
  selector: 'ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css'],
  providers: [PingService]
})
export class PingComponent {

  pingForm: FormGroup;

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
    const manageError = this.manageError.bind(this);
    if (this.pingForm.valid) {
      this.pingService.makeAPing(this.pingForm.value.ping).subscribe(
        response => this.pingMaked(response), manageError
      )}
  }

  pingMaked(response):void {
    console.log(response);
    //this.router.navigate(['/transactions'])
  }



  manageError(error: Error) {
    console.log(error.message);
  }

  isNotValidForm() {
    return !this.pingForm.valid;
  }

}
