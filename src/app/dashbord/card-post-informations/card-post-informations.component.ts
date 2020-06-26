import {Component, OnInit} from '@angular/core';
import {Manifestations} from '../../Interface/manifestations';
import {DashboardService} from '../dashboard.service';
import {Actualite} from '../../Interface/actualite';
import {Maj} from '../../Interface/maj';

@Component({
  selector: 'app-card-post-informations',
  templateUrl: './card-post-informations.component.html',
  styleUrls: ['./card-post-informations.component.css']
})
export class CardPostInformationsComponent implements OnInit {
  manifestations: Manifestations[];
  actualites: Actualite[];
  majs: Maj[];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.getManifestationTotalNumber().subscribe((response: Array<Manifestations>) => {
      this.manifestations = response;
      console.log(this.manifestations);
    });

    this.dashboardService.getActualiteTotalNumber().subscribe((response: Array<Actualite>) => {
      this.actualites = response;
      console.log(this.actualites);
    });
    this.dashboardService.getMajTotalNumber().subscribe((response: Array<Maj>) => {
      this.majs = response;
      console.log(this.majs);
    });
  }
}
