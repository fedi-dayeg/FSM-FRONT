import {Component, OnInit} from '@angular/core';
import {HomePublicService} from '../home-public.service';
import {Manifestations} from '../../Interface/manifestations';

@Component({
  selector: 'app-manifestation-detail-index',
  templateUrl: './manifestation-detail-index.component.html',
  styleUrls: ['./manifestation-detail-index.component.css']
})
export class ManifestationDetailIndexComponent implements OnInit {

  manifestation: Manifestations[];

  constructor(private homePublicService: HomePublicService) {
    this.homePublicService.getManifestation().subscribe((manifestations: Array<Manifestations>) => {
      this.manifestation = manifestations;
    });
  }

  ngOnInit(): void {
  }

}
