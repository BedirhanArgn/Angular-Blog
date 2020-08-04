//Bu modul materialui'ın componenetlerini içeriyor.Componentler bunları import ediyor. shared.module'da tanımlanıyor bu sınıf
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule
  ]
})
export class MeterialModule { }
