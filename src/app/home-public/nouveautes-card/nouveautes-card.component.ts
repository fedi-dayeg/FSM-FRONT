import { Component, OnInit } from '@angular/core';
import {HomePublicService} from '../home-public.service';
import {Actualite} from '../../Interface/actualite';

@Component({
  selector: 'app-nouveautes-card',
  templateUrl: './nouveautes-card.component.html',
  styleUrls: ['./nouveautes-card.component.css']
})
export class NouveautesCardComponent implements OnInit {
  actualite: Actualite[];
  totlRecord: number;
  page = 1;
  constructor(private homePublicService: HomePublicService) { }

  ngOnInit(): void {
    this.homePublicService.getActualite().subscribe((actualite: Array<Actualite>) => {
      this.actualite = actualite;
      this.totlRecord = actualite.length;
    });
  }

}
