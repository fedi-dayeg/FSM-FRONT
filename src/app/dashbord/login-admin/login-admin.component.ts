import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostumValidationService} from '../costum-validation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AlertServiceService} from '../alert-service.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(private fb: FormBuilder,
              private customValidator: CostumValidationService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertServiceService: AlertServiceService,
              private route: ActivatedRoute
  ) {
    if (this.authenticationService.currentAdminValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required], this.customValidator.usernameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertServiceService.clear();
    if (this.registerForm.invalid) {
      return;
    }
    this.authenticationService.login(this.registerFormControl.username.value, this.registerFormControl.password.value)
      .pipe(first())
      .subscribe(data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertServiceService.error(error);
        });
  }

}
