import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: any;
  @Output() toMama = new EventEmitter();
  toMomy(e){
    this.toMama.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
