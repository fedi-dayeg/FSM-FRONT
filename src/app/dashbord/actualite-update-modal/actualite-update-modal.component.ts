import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Actualite} from '../../Interface/actualite';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../dashboard.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-actualite-update-modal',
  templateUrl: './actualite-update-modal.component.html',
  styleUrls: ['./actualite-update-modal.component.css']
})
export class ActualiteUpdateModalComponent implements OnInit, OnDestroy {
  @Output() dismiss = new EventEmitter();
  @Output() actualiteUpdateSubmit = new EventEmitter();
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

  constructor(private el: ElementRef, private dashboardService: DashboardService, private sanitized: DomSanitizer) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    this.sanitized.bypassSecurityTrustHtml(this.actualitForm.value);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
  }

  onFormSubmit() {

  }

}
