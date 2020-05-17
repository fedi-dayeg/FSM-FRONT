import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/img/slide1.jpg',
    thumbImage: 'assets/img/slide1.jpg'
  },
    {
      image: 'assets/img/slide2.jpg',
      thumbImage: 'assets/img/slide2.jpg'
    },
    {
      image: 'assets/img/slide3.jpg',
      thumbImage: 'assets/img/slide3.jpg'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
