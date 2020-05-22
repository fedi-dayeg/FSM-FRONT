import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomePublicService} from '../home-public.service';
import {Manifestations} from '../../Interface/manifestations';

@Component({
  selector: 'app-manifestation-detail',
  templateUrl: './manifestation-detail.component.html',
  styleUrls: ['./manifestation-detail.component.css']
})
export class ManifestationDetailComponent implements OnInit {
manifestation: any = [];
  constructor(private route: ActivatedRoute, private homePublicService: HomePublicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.homePublicService.getManifestationDetail(id).subscribe((response: Array<Manifestations>) => {
      console.log(this.manifestation = response);
      this.manifestation = response;
    });

  }

}
