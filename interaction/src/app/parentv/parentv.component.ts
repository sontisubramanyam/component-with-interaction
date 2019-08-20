import { Component, OnInit, ViewChild } from '@angular/core';
import { VchildComponent } from '../vchild/vchild.component';

@Component({
  selector: 'app-parentv',
  templateUrl: './parentv.component.html',
  styleUrls: ['./parentv.component.css']
})
export class ParentvComponent implements OnInit{

  @ViewChild(VchildComponent,name) childdata: any;
  message: any;

  constructor() {

  }
  ngOnInit() {
    this.message = this.childdata.childvar;
  }
  

}
