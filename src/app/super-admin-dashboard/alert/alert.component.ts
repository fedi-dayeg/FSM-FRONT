import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertSuperAdminService} from '../alert-super-admin.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertSuperAdminService: AlertSuperAdminService) {
  }

  ngOnInit(): void {
    this.subscription = this.alertSuperAdminService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'ui secondary inverted red segment';
            break;
        }

        this.message = message;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
