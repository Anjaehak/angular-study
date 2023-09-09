import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
  })

  export class NavComponent {
    logo='../assets/navIc/logo.png';
    search='../assets/navIc/search.png';
    myPage='../assets/navIc/account-details.png'
    vector='../assets/navIc/Vector/png'
    logout='../assets/navIc/logout.png'
  }