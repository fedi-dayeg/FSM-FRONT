import {Component, OnInit} from '@angular/core';
import {Admin} from '../../Interface/admin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SuperAdminService} from '../super-admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Actualite} from '../../Interface/actualite';

@Component({
  selector: 'app-apdate-admin',
  templateUrl: './apdate-admin.component.html',
  styleUrls: ['./apdate-admin.component.css']
})
export class ApdateAdminComponent implements OnInit {
  admin: any = [];
  admins: Admin[];

  updateAdminForm = new FormGroup({
    email: new FormControl(['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]),
    nom: new FormControl(['', Validators.required]),
    prenom: new FormControl(['', Validators.required])
  });

  constructor(private superAdminService: SuperAdminService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.superAdminService.getAdminById(id).subscribe((response: Array<Admin>) => {
      this.admin = response;
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.superAdminService.updateAdmin(id, this.updateAdminForm.value).subscribe(data => console.log(data),
      error => console.log(error));
    this.router.navigate(['/dashboardadmin']);
  }

}
