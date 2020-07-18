import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AthentificationSuperAdminService} from '../athentification-super-admin.service';
import {CustumValidationSuperAdminService} from '../custum-validation-super-admin.service';
import {SuperAdminService} from '../super-admin.service';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
  addAdminForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private custumValidationSuperAdminService: CustumValidationSuperAdminService,
              private superAdminService: SuperAdminService) {
  }

  get getEmail() {
    return this.addAdminForm.get('email');
  }

  get AddedAdminFormControl() {
    return this.addAdminForm.controls;
  }

  ngOnInit(): void {
    this.addAdminForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.compose([Validators.required,
        this.custumValidationSuperAdminService.patternValidator()])],
      nom: ['', Validators.required],
      prenom: ['', Validators.required]
    });
  }

  onSubmit() {
    this.superAdminService.addAdmin(this.addAdminForm.value).subscribe(() => {
      this.router.navigate(['/dashboardadmin']);
    });
  }
}
