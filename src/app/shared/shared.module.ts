import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [CardComponent, LoaderComponent],
    exports: [
        CardComponent,
        LoaderComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
