import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MeterialModule } from '../meterial.module';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MeterialModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    MeterialModule,
    NavbarComponent ,
    RouterModule
  ]
})
export class SharedModule { }
