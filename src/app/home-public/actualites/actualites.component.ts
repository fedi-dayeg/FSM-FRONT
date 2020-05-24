import {Component, OnInit} from '@angular/core';
import {HomePublicService} from '../home-public.service';
import validate = WebAssembly.validate;
import {Actualite} from '../../Interface/actualite';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  items: Actualite[];

  constructor(private homePublicService: HomePublicService, private router: Router) {
  }

  ngOnInit(): void {
    this.homePublicService.getActualite().subscribe((response: Array<Actualite>) => {
      this.items = response;
    });
  }

  onClicked(id: string) {
    console.log(id);
    this.router.navigate([`/actualite/${id}`]);
  }


}
