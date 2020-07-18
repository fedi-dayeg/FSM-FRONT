import {Component, OnInit} from '@angular/core';
import {SuperAdmin} from '../../Interface/super-admin';
import {SuperAdminService} from '../super-admin.service';
import {Admin} from '../../Interface/admin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  admins: SuperAdmin[];
  admin: any = [];

  constructor(private superAdminService: SuperAdminService) {
  }

  ngOnInit(): void {
    this.superAdminService.getAdmins().subscribe((response: Array<Admin>) => {
      this.admins = response;
    });
  }

  deleteAdmin(id) {
    if (confirm('Are you sure you want to delete ' + id + '?')) {
      this.superAdminService.deleteAdmin(id).subscribe((res) => console.log(res));
      location.reload();
    }
  }

}
