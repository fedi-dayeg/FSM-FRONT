import {Component, OnInit} from '@angular/core';
import {HomePublicService, Manifestations} from '../home-public.service';

@Component({
  selector: 'app-manifestations',
  templateUrl: './manifestations.component.html',
  styleUrls: ['./manifestations.component.css']
})
export class ManifestationsComponent implements OnInit {
  manifestation: Manifestations[];

  constructor(private homePublicService: HomePublicService) {
    this.homePublicService.getManifestation().subscribe((manifestations: Array<Manifestations>) => {
      this.manifestation = manifestations;
    });
  }

  ngOnInit(): void {
  }

}
