import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-administrator-navigation-menu',
  templateUrl: './administrator-navigation-menu.component.html',
  styleUrls: ['./administrator-navigation-menu.component.scss']
})
export class AdministratorNavigationMenuComponent implements AfterViewInit {
  selectedRole: string;

  constructor() { }

  ngAfterViewInit(): void {
    this.selectedRole = localStorage.getItem('selectedRole');
  }

}
