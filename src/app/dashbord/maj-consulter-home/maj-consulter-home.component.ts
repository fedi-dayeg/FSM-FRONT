import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Actualite} from '../../Interface/actualite';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../dashboard.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Maj} from '../../Interface/maj';

@Component({
  selector: 'app-maj-consulter-home',
  templateUrl: './maj-consulter-home.component.html',
  styleUrls: ['./maj-consulter-home.component.css']
})
export class MajConsulterHomeComponent implements OnInit, OnDestroy {

  majs: Maj[];
  maj: any = [];
  majUpdate: Maj;
  totalRecords: number;
  p = 1;
  showModal = false;

  /*@Output() dismiss = new EventEmitter();*/
  @Output() majUpdateSubmit = new EventEmitter();
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

  majForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required]),
    id: new FormControl(''),
    descriptions: new FormControl('')
  });

  constructor(private dashboardService: DashboardService,
              private el: ElementRef,
              private sanitized: DomSanitizer,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);

    this.sanitized.bypassSecurityTrustHtml(this.majForm.value);
    this.dashboardService.getAllMajs().subscribe((response: Array<Maj>) => {
      this.majs = response;
      this.totalRecords = response.length;
    });
  }

  deleteMaj(id): void {
    if (confirm('Are you sure you want to delete ' + id + '?')) {
      this.dashboardService.deleteMaj(id).subscribe((res) => console.log(res));
      location.reload();
    }
  }

  updateMaj(id) {
    this.showModal = true;
    console.log(id);
    this.dashboardService.getMajDetail(id).subscribe((
      response: Array<Maj>) => {
      this.maj = response;
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
    console.log(this.majForm.value);
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.updateMaj(id, this.majForm.value).subscribe(data => console.log(data),
      error => console.log(error));
    this.router.navigate(['/dashboard/maj/detail']);
  }


}
