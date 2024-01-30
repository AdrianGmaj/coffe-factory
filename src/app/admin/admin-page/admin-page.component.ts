import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  logOut(){
    this.auth.signOut().subscribe(()=>{
      this.router.navigateByUrl('log-in')
    })
  
  
  }
}
