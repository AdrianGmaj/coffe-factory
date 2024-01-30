import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  LogInForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,],
    ),
    password: new FormControl('',
      [Validators.required]),

  })
  constructor(    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }
 onSubmit(){
  this.auth.logIn(this.LogInForm.getRawValue()).subscribe({
    next: (response) => {
      if (response.success) {
        if (response.role === 2) {
          this.router.navigateByUrl('admin')
        }
      }
    }
  })
 }
}
