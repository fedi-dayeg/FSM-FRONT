import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {Admin} from '../../Interface/admin';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
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
