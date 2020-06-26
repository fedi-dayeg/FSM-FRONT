import {Component, OnInit} from '@angular/core';
import {HomePublicService} from '../home-public.service';
import {Albums} from '../../Interface/albums';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-galerie-albm',
  templateUrl: './galerie-albm.component.html',
  styleUrls: ['./galerie-albm.component.css']
})
export class GalerieAlbmComponent implements OnInit {
  albums: Albums[];
  imageUri = 'http://localhost:5000/public/image/';
  constructor(private homePublicService: HomePublicService, private route: Router) {
  }

  ngOnInit(): void {
    this.homePublicService.getAlbums().subscribe((albums: Array<Albums>) => {
      this.albums = albums;
    });
  }

  onClick(id: number) {
    console.log(id);
    this.route.navigate([`/images/${id}`]);
  }

}
