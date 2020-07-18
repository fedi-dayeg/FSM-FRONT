import { Component, OnInit } from '@angular/core';
import {AthentificationSuperAdminService} from '../athentification-super-admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sper-admin-home-dachboard',
  templateUrl: './sper-admin-home-dachboard.component.html',
  styleUrls: ['./sper-admin-home-dachboard.component.css']
})
export class SperAdminHomeDachboardComponent implements OnInit {

  constructor(private athentificationSuperAdminService: AthentificationSuperAdminService,  private router: Router,) { }

  ngOnInit(): void {
  }
  logout() {
    this.athentificationSuperAdminService.logout();
    this.router.navigate(['/dashboardadmin/login']);
  }

}
