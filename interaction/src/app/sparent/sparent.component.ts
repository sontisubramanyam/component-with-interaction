import { Component, OnInit } from '@angular/core';
import { ServicesService} from '.././services.service';

@Component({
  selector: 'app-sparent',
  templateUrl: './sparent.component.html',
  styleUrls: ['./sparent.component.css']
})
export class SparentComponent implements OnInit {
  text = '';
  constructor(private data:ServicesService) { }

  ngOnInit() {
  }
  updateText(text){
    this.data.updateData(text);
  }
}
