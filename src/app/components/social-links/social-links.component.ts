import { Component, Input } from '@angular/core';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'alo-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.sass']
})
export class SocialLinksComponent {
  @Input() socialLinks;
  constructor(public dialog: MatDialog) {}

  confirmDialog: MatDialogRef<ConfirmDialog>;

  openDialog(link): void {
    this.confirmDialog = this.dialog.open(ConfirmDialog, {
      width: '350px',
      data:{
        link: link
      }
    });
  }
}
