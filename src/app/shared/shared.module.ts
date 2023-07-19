import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  exports:[
    HeaderComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
