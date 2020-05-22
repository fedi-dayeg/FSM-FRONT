import {Component, OnInit} from '@angular/core';
import {HomePublicService} from '../home-public.service';
import {Manifestations} from '../../Interface/manifestations';

@Component({
  selector: 'app-manifestations-card',
  templateUrl: './manifestations-card.component.html',
  styleUrls: ['./manifestations-card.component.css']
})
export class ManifestationsCardComponent implements OnInit {
  manifestation: Manifestations[];
  totlRecord: number;
  page = 1;

  constructor(private homePublicService: HomePublicService) {
  }

  ngOnInit(): void {
    this.homePublicService.getManifestation().subscribe((manifestations: Array<Manifestations>) => {
      this.manifestation = manifestations;
      this.totlRecord = manifestations.length;
    });
  }
}
