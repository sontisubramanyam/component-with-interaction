import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './child/child.component';
import { VchildComponent } from './vchild/vchild.component';
import { ParentvComponent } from './parentv/parentv.component';
import { SparentComponent } from './sparent/sparent.component';
import { Sparent1Component } from './sparent1/sparent1.component';
import { Sparent2Component } from './sparent2/sparent2.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    VchildComponent,
    ParentvComponent,
    SparentComponent,
    Sparent1Component,
    Sparent2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
