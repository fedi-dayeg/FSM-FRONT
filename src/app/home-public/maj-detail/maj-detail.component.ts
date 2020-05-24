import { Component, OnInit } from '@angular/core';
import {Manifestations} from '../../Interface/manifestations';
import {ActivatedRoute} from '@angular/router';
import {HomePublicService} from '../home-public.service';
import {Maj} from '../../Interface/maj';

@Component({
  selector: 'app-maj-detail',
  templateUrl: './maj-detail.component.html',
  styleUrls: ['./maj-detail.component.css']
})
export class MajDetailComponent implements OnInit {
  maj: any = [];
  constructor(private route: ActivatedRoute, private homePublicService: HomePublicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.homePublicService.getMajDetail(id).subscribe((response: Array<Maj>) => {
      this.maj = response;
    });
  }

}
