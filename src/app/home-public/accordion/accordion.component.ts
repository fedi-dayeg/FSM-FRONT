import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedItemIndex = -1;
  @Output() clicked = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

  itemId(id: string) {
    this.clicked.emit(id);
  }

}
