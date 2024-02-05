import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CoffeeMenu } from 'src/app/services/CoffeMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.scss']
})
export class DialogSearchComponent implements OnInit {
  inputValue: string

  filteredData$: Observable<Array<CoffeeMenu>>
  constructor(private menuService: MenuService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
  }
  showCoffee() {
    this.filteredData$ = this.menuService.getProducts().pipe(
      map((products) => products.filter((coffee) => coffee.title.toLowerCase().includes(this.inputValue.toLowerCase())))
    )

  }
  choose(id) {
    this.router.navigateByUrl(`/menu-coffee/${id}`)
    this.dialog.closeAll()
  }

}
