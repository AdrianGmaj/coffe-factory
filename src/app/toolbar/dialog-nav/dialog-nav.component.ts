import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-nav',
  templateUrl: './dialog-nav.component.html',
  styleUrls: ['./dialog-nav.component.scss']
})
export class DialogNavComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogNavComponent>) { }


  
  ngOnInit() {
  }

  
  close() {
    this.dialogRef.close()
  }
}
