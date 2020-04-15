import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@app/_services';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  name: string;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.name = this.authenticationService.currentUserValue.firstName;
  }

}
