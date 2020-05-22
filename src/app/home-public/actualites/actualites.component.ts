import { Component, OnInit } from '@angular/core';
import {HomePublicService} from '../home-public.service';
import validate = WebAssembly.validate;
import {Actualite} from '../../Interface/actualite';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  items: Actualite[];
  constructor(private homePublicService: HomePublicService) { }

  ngOnInit(): void {
    this.homePublicService.getActualite().subscribe((response: Array<Actualite>) => {
      this.items = response;
    });
  }


}
