import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Actualite} from '../../Interface/actualite';
import {DashboardService} from '../dashboard.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-actualite-ajout-modal',
  templateUrl: './actualite-ajout-modal.component.html',
  styleUrls: ['./actualite-ajout-modal.component.css']
})
export class ActualiteAjoutModalComponent implements OnInit, OnDestroy {
  @Output() dismiss = new EventEmitter();
  @Output() actualiteAjoutSubmit = new EventEmitter();
  showModal = false;
  actualite: Actualite;

  editorStyle = {
    height: '100px'
  };

  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{header: 1}, {header: 2}],               // custom button values
      [{list: 'ordered'}, {list: 'bullet'}],
      [{script: 'sub'}, {script: 'super'}],      // superscript/subscript
      [{indent: '-1'}, {indent: '+1'}],          // outdent/indent
      [{direction: 'rtl'}],                         // text direction

      [{size: ['small', false, 'large', 'huge']}],  // custom dropdown
      [{header: [1, 2, 3, 4, 5, 6, false]}],

      [{color: []}, {background: []}],          // dropdown with defaults from theme
      [{font: []}],
      [{align: []}],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };


  actualitForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  constructor(private el: ElementRef, private dashboardService: DashboardService, private sanitized: DomSanitizer, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    const currentDate = new Date().toISOString().substring(0, 10);
    this.actualitForm.controls.date.setValue(currentDate);
    this.sanitized.bypassSecurityTrustHtml(this.actualitForm.value);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
  }

  onFormSubmit() {
    console.log(this.actualitForm.value);
    const currentAdmin = this.authenticationService.currentAdminValue;
    console.log(currentAdmin);
    this.dashboardService.addActualite(this.actualitForm.value).subscribe(() => {
        this.dismiss.emit();
      }
    );
  }

}
