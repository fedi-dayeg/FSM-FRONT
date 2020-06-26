import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualite-card',
  templateUrl: './actualite-card.component.html',
  styleUrls: ['./actualite-card.component.css']
})
export class ActualiteCardComponent implements OnInit {
  showModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
