import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Actualite} from '../../Interface/actualite';
import {DashboardService} from '../dashboard.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actualite-consulter-home',
  templateUrl: './actualite-consulter-home.component.html',
  styleUrls: ['./actualite-consulter-home.component.css']
})
export class ActualiteConsulterHomeComponent implements OnInit, OnDestroy {
  actualites: Actualite[];
  actualite: any = [];
  actualiteUpdate: Actualite;
    totalRecords: number;
  p = 1;
  showModal = false;

  /*@Output() dismiss = new EventEmitter();*/
  @Output() actualiteUpdateSubmit = new EventEmitter();
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

  actualitForm = new FormGroup({
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

    this.sanitized.bypassSecurityTrustHtml(this.actualitForm.value);
    this.dashboardService.getActualite().subscribe((response: Array<Actualite>) => {
      this.actualites = response;
      this.totalRecords = response.length;
    });
  }

  deleteAct(id): void {
    if (confirm('Are you sure you want to delete ' + id + '?')) {
      this.dashboardService.deleteActualite(id).subscribe((res) => console.log(res));
      location.reload();
    }
  }

  updateAct(id) {
    this.showModal = true;
    console.log(id);
    this.dashboardService.getActualiteDetail(id).subscribe((
      response: Array<Actualite>) => {
      this.actualite = response;
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
    console.log(this.actualitForm.value);
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.updateActualite(id, this.actualitForm.value).subscribe(data => console.log(data),
      error => console.log(error));
    this.router.navigate(['/dashboard/actualite/detail']);
  }


}
