import { Component, OnInit } from '@angular/core';
import {Acualite, AcutaliteApiResponse, HomePublicService} from '../home-public.service';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  items: Acualite[];
  constructor(private homePublicService: HomePublicService) { }

  ngOnInit(): void {
    this.homePublicService.getActualite().subscribe((response: Array<Acualite>) => {
      this.items = response;
    });
  }


}
