import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {Admin} from '../../Interface/admin';

@Component({
  selector: 'app-home-dashbord',
  templateUrl: './home-dashbord.component.html',
  styleUrls: ['./home-dashbord.component.css']
})
export class HomeDashbordComponent implements OnInit {
  currentAdmin: Admin;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentAdmin.subscribe(x => this.currentAdmin = x);
  }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/dashboard/login']);
  }
}
