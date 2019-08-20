import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { VchildComponent } from './vchild/vchild.component';
import { ParentvComponent } from './parentv/parentv.component';
import { SparentComponent} from './sparent/sparent.component';
import { Sparent1Component } from './sparent1/sparent1.component';
import { Sparent2Component } from './sparent2/sparent2.component';



const routes: Routes = [
  { path: '',  redirectTo: '/crusline', pathMatch: 'full' },
  

  {
    path: 'crusline',
    component : HomeComponent,
  
  },
  
  {
    path : 'psg',
    component : ChildComponent
  },
  
  {
    path : 'some',
    component : ParentvComponent
  },
  
  {
    path : 'something',
    component : VchildComponent
  
  },
  
  {
    path : 'share',
    component : SparentComponent
  },
  {
    path : 'sharing',
    component : Sparent1Component
  },
  {
    path : 'sharedata',
    component : Sparent2Component
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
