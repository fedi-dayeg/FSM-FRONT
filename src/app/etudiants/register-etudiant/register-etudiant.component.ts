import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import {MustMatch} from '../helpers/must_match.validator';
import {CustomValidatorService} from '../custom-validator.service';

@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css']
})
export class RegisterEtudiantComponent implements OnInit {
  addEtudiant: FormGroup;
  submitted = false;
  modalOpen = false;
  etatOption = [
    {name: 'Etudiant'},
    {name: 'Enseignant'}
  ];
  gradeOptions = [
    {name: 'Maître Assistant'}, {name: 'PES Master'}, {name: 'Assistant'}, {name: 'PES'},
    {name: 'Maître de Conférences'}, {name: 'Maître deConférences'},
    {name: 'PROFESSEUR D\'ENSEIGNEMENT SUPERIEUR'},
    {name: 'Post Doc'}
  ];

  constructor(private fb: FormBuilder,
              private router: Router,
              private etudiantService: EtudiantService,
              private customValidatorService: CustomValidatorService) {
  }

  get AddedEtudiantFormControl() {
    return this.addEtudiant.controls;
  }

  ngOnInit(): void {
    this.addEtudiant = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      cin: ['', [Validators.required, Validators.pattern('^[0-9]{8}$'), Validators.minLength(8)]],
      etat: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      specialite: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      dateInscription: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidatorService.patternValidator()])],
      confirmPassword: ['', Validators.required],
      etablissement: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      universite: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      activate: ['0']
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.addEtudiant.controls;
  }


  onSubmit() {
    if (this.addEtudiant.invalid) {
      return;
    }
    this.etudiantService.addEtudiant(this.addEtudiant.value).subscribe(() => {
      /* this.router.navigate(['/']);*/
      this.redirect();
    });
  }

  redirect() {
    this.router.navigate(['/']);
  }

}
