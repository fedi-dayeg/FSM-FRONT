import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Manifestations} from '../../Interface/manifestations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../dashboard.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Actualite} from '../../Interface/actualite';

@Component({
  selector: 'app-manifestation-consulter-home',
  templateUrl: './manifestation-consulter-home.component.html',
  styleUrls: ['./manifestation-consulter-home.component.css']
})
export class ManifestationConsulterHomeComponent implements OnInit, OnDestroy {

  manifestations: Manifestations[];
  manifestation: any = [];
  totalRecords: number;
  p = 1;
  showModal = false;
  @Output() manifestationUpdateSubmit = new EventEmitter();
  dismiss;

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

  manifestationForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required]),
    id: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private dashboardService: DashboardService,
              private el: ElementRef,
              private sanitized: DomSanitizer,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);

    this.sanitized.bypassSecurityTrustHtml(this.manifestationForm.value);
    this.dashboardService.getManifestation().subscribe((response: Array<Manifestations>) => {
      this.manifestations = response;
      this.totalRecords = response.length;
    });
  }

  deleteAct(id): void {
     if (confirm('Are you sure you want to delete ' + id + '?')) {
       this.dashboardService.deleteManifestation(id).subscribe((res) => console.log(res));
       location.reload();
     }
  }

  updateAct(id) {
    this.showModal = true;
    console.log(id);
    this.dashboardService.getManifestationDetail(id).subscribe((
      response: Array<Manifestations>) => {
      this.manifestation = response;
    });
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss = this.showModal = false;
  }

  onFormSubmit(event: any) {
    /*this.dashboardService.updateActualite()*/
    console.log(this.manifestationForm.value);
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.updateManifestation(id, this.manifestationForm.value).subscribe(data => console.log(data),
      error => console.log(error));
    this.router.navigate(['/dashboard/manifestation/detail']);
  }
}
