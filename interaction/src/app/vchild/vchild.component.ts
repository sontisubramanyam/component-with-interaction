import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vchild',
  templateUrl: './vchild.component.html',
  styleUrls: ['./vchild.component.css']
})
export class VchildComponent implements OnInit {
  message = 'new messege here';
  childvar:any = "this is child var data";
  constructor() { }

  ngOnInit() {
  }

}
