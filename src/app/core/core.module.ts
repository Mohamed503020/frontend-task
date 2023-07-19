import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './@Ui-Components/loader/loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
      HttpClientModule
  ],
  exports:[
    LoaderComponent
  ]
})
export class CoreModule { }
