import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [CardComponent, LoaderComponent, InputComponent, ModalComponent],
    exports: [
        CardComponent,
        LoaderComponent,
        ModalComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
