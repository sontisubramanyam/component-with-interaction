import { Component, OnInit } from '@angular/core';
import { ServicesService } from '.././services.service';
@Component({
  selector: 'app-sparent1',
  templateUrl: './sparent1.component.html',
  styleUrls: ['./sparent1.component.css']
})
export class Sparent1Component implements OnInit {
  text = '';
  constructor(private data: ServicesService) {

  }
  ngOnInit() {
    this.data.share.subscribe(x => this.text = x);
  }

}
