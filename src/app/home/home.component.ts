import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.target.tagName)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }// else {
      //   entry.target.classList.remove('show')
      // }
    })
  })

  constructor() { }

  ngOnInit() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element)=> this.observer.observe(element))
    console.log(hiddenElements)
  }

}
