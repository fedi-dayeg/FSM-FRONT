import {Component, OnInit} from '@angular/core';
import {HomePublicService, Manifestations} from '../home-public.service';

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
