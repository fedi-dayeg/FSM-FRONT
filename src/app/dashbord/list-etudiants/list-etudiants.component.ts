import {Component, OnInit} from '@angular/core';
import {SuperAdmin} from '../../Interface/super-admin';
import {Etudiants} from '../../Interface/etudiants';
import {DashboardService} from '../dashboard.service';
import {Admin} from '../../Interface/admin';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent implements OnInit {
  etudiants: Etudiants[];
  etudiant: any = [];

  constructor(private dashboardService: DashboardService, private router: Router) {
  }

  ngOnInit(): void {
    this.dashboardService.getEtudiants().subscribe((response: Array<Etudiants>) => {
      this.etudiants = response;
    });
  }

  unlock(id: number) {
    this.dashboardService.unlockEtudiants(id).subscribe(() => {
      window.location.reload();
    });
  }

  deleteEtudiant(id: number) {
    this.dashboardService.deleteEtudiant(id).subscribe(() => {
      window.location.reload();
    });
  }

}
