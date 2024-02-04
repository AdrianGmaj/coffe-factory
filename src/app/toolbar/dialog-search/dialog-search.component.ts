import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.scss']
})
export class DialogSearchComponent implements OnInit {
  inputValue: string

  filteredData: Array<CoffeeMenu>
  constructor(private dialogRef: MatDialogRef<DialogSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<CoffeeMenu>,
    private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit() {
  }
  showCoffee() {
    this.filteredData = this.data.filter((coffee) => coffee.title.toLowerCase().includes(this.inputValue.toLowerCase()))
  }
  choose(id) {
    this.router.navigateByUrl(`/menu-coffee/${id}`)
    this.dialog.closeAll()
  }

}
