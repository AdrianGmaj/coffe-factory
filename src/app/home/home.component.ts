import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }// else {
      //   entry.target.classList.remove('show')
      // }
    })
  })


  constructor(private viewportScroller: ViewportScroller,private route: ActivatedRoute) { }

  ngOnInit() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element)=> this.observer.observe(element))
  }
  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.viewportScroller.scrollToAnchor(fragment)
    }
    )
  }

}
