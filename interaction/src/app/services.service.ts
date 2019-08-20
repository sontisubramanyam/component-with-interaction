import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private content = new BehaviorSubject<any>("Default Data");
  public share = this.content.asObservable();
  constructor() { 

  }
  updateData(text){
    this.content.next(text);
  }
}
