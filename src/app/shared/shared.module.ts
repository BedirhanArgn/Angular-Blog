import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterialModule } from '../meterial.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MeterialModule
  ],
  exports:[
    CommonModule,
    MeterialModule 
  ]
})
export class SharedModule { }
