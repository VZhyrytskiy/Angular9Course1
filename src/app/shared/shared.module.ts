import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './components/first-component/first-component.component';



@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FirstComponentComponent
  ]
})
export class SharedModule { }