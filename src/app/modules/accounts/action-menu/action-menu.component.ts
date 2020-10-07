import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAccountDialogComponent} from '../add-account-dialog/add-account-dialog.component';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActionMenuComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onClickAddUser() {
    const dialogRef = this.dialog.open(AddAccountDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '80%',
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
