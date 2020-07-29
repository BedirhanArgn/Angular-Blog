//Bu modul materialui'ın componenetlerini içeriyor.Componentler bunları import ediyor.
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MeterialModule { }
