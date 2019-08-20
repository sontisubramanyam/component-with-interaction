import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentMessage = "message from parent"
  msgFromChild: any;
  childSays(e){
    this.msgFromChild = e;
  }
  constructor() { }

  ngOnInit() {
  }

}
