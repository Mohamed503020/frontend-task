import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
