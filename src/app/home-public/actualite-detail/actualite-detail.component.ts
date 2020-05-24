import { Component, OnInit } from '@angular/core';
import {HomePublicService} from '../home-public.service';
import {Manifestations} from '../../Interface/manifestations';
import {ActivatedRoute} from '@angular/router';
import {Actualite} from '../../Interface/actualite';

@Component({
  selector: 'app-actualite-detail',
  templateUrl: './actualite-detail.component.html',
  styleUrls: ['./actualite-detail.component.css']
})
export class ActualiteDetailComponent implements OnInit {
  actualite: any = [];
  constructor( private homePublicService: HomePublicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.homePublicService.getActualiteDetail(id).subscribe((response: Array<Actualite>) => {
      console.log(this.actualite = response);
      /*this.actualite = response;*/
    });
  }

}
