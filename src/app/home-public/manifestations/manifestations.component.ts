import {Component, OnInit} from '@angular/core';
import {HomePublicService} from '../home-public.service';
import {Manifestations} from '../../Interface/manifestations';

@Component({
  selector: 'app-manifestations',
  templateUrl: './manifestations.component.html',
  styleUrls: ['./manifestations.component.css']
})
export class ManifestationsComponent implements OnInit {
  manifestation: Manifestations[];

  constructor(private homePublicService: HomePublicService) {
  }

  ngOnInit(): void {
    this.homePublicService.getManifestation().subscribe((manifestations: Array<Manifestations>) => {
      this.manifestation = manifestations;
    });
  }

}
