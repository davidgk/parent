import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  doPing(){
    this.router.navigate(['/ping']);
  }

  cleanScreen(){
    this.router.navigate(['/clean-screen']);
  }


}
