import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MeterialModule } from '../meterial.module';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MeterialModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    MeterialModule,
    NavbarComponent ,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
