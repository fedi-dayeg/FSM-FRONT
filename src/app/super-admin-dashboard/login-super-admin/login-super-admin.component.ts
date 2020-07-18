import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AthentificationSuperAdminService} from '../athentification-super-admin.service';
import {AlertSuperAdminService} from '../alert-super-admin.service';
import {CustumValidationSuperAdminService} from '../custum-validation-super-admin.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-super-admin',
  templateUrl: './login-super-admin.component.html',
  styleUrls: ['./login-super-admin.component.css']
})
export class LoginSuperAdminComponent implements OnInit {
  registerSuperAdminForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(private fb: FormBuilder,
              private custumValidationSuperAdminService: CustumValidationSuperAdminService,
              private router: Router,
              private alertSuperAdminService: AlertSuperAdminService,
              private route: ActivatedRoute,
              private athentificationSuperAdminService: AthentificationSuperAdminService
  ) {
    if (this.athentificationSuperAdminService.currentSuperAdminValue) {
      this.router.navigate(['/dashboardadmin']);
    }
  }

  get registerFormControl() {
    return this.registerSuperAdminForm.controls;
  }

  ngOnInit(): void {
    this.registerSuperAdminForm = this.fb.group({
      username: ['', [Validators.required],
        this.custumValidationSuperAdminService.usernameValidator.bind(this.custumValidationSuperAdminService)],
      password: ['', Validators.compose([Validators.required,
        this.custumValidationSuperAdminService.patternValidator()])]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboardadmin';
  }

  onSubmit() {
    this.submitted = true;
    this.alertSuperAdminService.clear();
    if (this.registerSuperAdminForm.invalid) {
      return;
    }
    this.athentificationSuperAdminService.login(this.registerFormControl.username.value, this.registerFormControl.password.value)
      .pipe(first())
      .subscribe(data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertSuperAdminService.error(error);
        });
  }

}
