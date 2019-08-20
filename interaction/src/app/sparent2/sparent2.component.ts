import { Component, OnInit } from '@angular/core';
import { ServicesService } from '.././services.service';
@Component({
  selector: 'app-sparent2',
  templateUrl: './sparent2.component.html',
  styleUrls: ['./sparent2.component.css']
})
export class Sparent2Component implements OnInit {
  text = '';
  constructor(private data: ServicesService) {
  }
  ngOnInit() {
    this.data.share.subscribe(x => this.text = x);
  }

}
