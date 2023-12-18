import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 75) {
        this.navbar.classList.add('scrolled')
      } else {
        this.navbar.classList.remove('scrolled')
      }
    })
  }

  navbar = document.querySelector('.nav')


}
