import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-nav',
  templateUrl: './dialog-nav.component.html',
  styleUrls: ['./dialog-nav.component.scss']
})
export class DialogNavComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogNavComponent>,
    private router: Router) { }



  ngOnInit() {
  }


  close() {
    this.dialogRef.close()
  }

  goToFragment(fragment: string) {
    this.dialogRef.close()
    setTimeout(() => {
      this.router.navigate([''], { fragment: fragment })
    }, 100);

  }
}
