import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  data: any;
  submitted: boolean = false;

  constructor(
    private apiClient: ApiService,
    public router: Router
  ) { }
  
  ngOnInit() {
  }

  onSend() {
    this.apiClient.login(this.data).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/book-shop'])
    })
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.data = form;
    this.onSend();
  }
}