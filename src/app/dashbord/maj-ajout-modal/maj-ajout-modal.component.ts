import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Maj} from '../../Interface/maj';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../dashboard.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-maj-ajout-modal',
  templateUrl: './maj-ajout-modal.component.html',
  styleUrls: ['./maj-ajout-modal.component.css']
})
export class MajAjoutModalComponent implements OnInit, OnDestroy {
  @Output() dismiss = new EventEmitter();
  @Output() majAjoutSubmit = new EventEmitter();
  showModal = false;
  maj: Maj;

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

  majForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required]),
    descriptions: new FormControl('')
  });

  constructor(private el: ElementRef, private dashboardService: DashboardService, private sanitized: DomSanitizer) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    const currentDate = new Date().toISOString().substring(0, 10);
    this.majForm.controls.date.setValue(currentDate);
    this.sanitized.bypassSecurityTrustHtml(this.majForm.value);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
  }

  onFormSubmit() {
    console.log(this.majForm.value);
    this.dashboardService.addMaj(this.majForm.value).subscribe(() => {
        this.dismiss.emit();
      }
    );
  }

}
