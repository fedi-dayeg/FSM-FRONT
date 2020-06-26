import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [CardComponent, LoaderComponent, InputComponent],
    exports: [
        CardComponent,
        LoaderComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
