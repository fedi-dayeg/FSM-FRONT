import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';

@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css']
})
export class RegisterEtudiantComponent implements OnInit {
  addEtudiant: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private etudiantService: EtudiantService) {
  }

  get AddedEtudiantFormControl() {
    return this.addEtudiant.controls;
  }

  ngOnInit(): void {
    this.addEtudiant = this.fb.group({
      nom: ['', [Validators.required], Validators.minLength(4), Validators.maxLength(20)],
      prenom: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      cin: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(8)]],
      etat: ['', Validators.required, Validators.minLength(2), Validators.maxLength(20)],
      grade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      dateInscription: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      etablissement: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      universite: ['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      activate: ['0']
    });
  }
  onSubmit() {
    this.etudiantService.addEtudiant(this.addEtudiant.value).subscribe(() => {
      if (confirm('Votre demande a éte envoyé, attendez l\'acceptation par l\'administration ')) {
        this.router.navigate(['/']);
      }
    });
  }

}
