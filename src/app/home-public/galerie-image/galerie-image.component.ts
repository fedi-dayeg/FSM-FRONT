import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomePublicService} from '../home-public.service';
import {Image} from '../../Interface/image';

@Component({
  selector: 'app-galerie-image',
  templateUrl: './galerie-image.component.html',
  styleUrls: ['./galerie-image.component.css']
})
export class GalerieImageComponent implements OnInit {
  images: Array<{ imagePath: string }> = [];
  imageUri = 'http://localhost:5000/public/image/';

  constructor(private route: ActivatedRoute, private homePublicService: HomePublicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.homePublicService.getImageByAlbumId(id).subscribe((response: Array<Image>) => {
      console.log(response);
      // @ts-ignore
      // this.images.unshift('http://localhost:5000/public/image/')
      this.images = response;
    });
  }

  /*getMyImages(url: string): void {
    }*/

}
