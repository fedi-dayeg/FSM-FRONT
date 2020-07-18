import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manifestations-card',
  templateUrl: './manifestations-card.component.html',
  styleUrls: ['./manifestations-card.component.css']
})
export class ManifestationsCardComponent implements OnInit {
  showModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
