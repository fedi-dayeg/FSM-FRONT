import { Component, OnInit } from '@angular/core';
import {Maj} from '../../Interface/maj';
import {HomePublicService} from '../home-public.service';

@Component({
  selector: 'app-maj',
  templateUrl: './maj.component.html',
  styleUrls: ['./maj.component.css']
})
export class MajComponent implements OnInit {
majs: Maj[];
  constructor(private homePublicService: HomePublicService) { }

  ngOnInit(): void {
    this.homePublicService.getMaj().subscribe((maj: Array<Maj>) => {
      this.majs = maj;
    });
  }

}
