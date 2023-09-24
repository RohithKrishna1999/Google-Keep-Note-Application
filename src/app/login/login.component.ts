import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private service: AuthenticationService , private route: RouterService) { }
  public submitMessage = '';
    username = new FormControl();
    password = new FormControl();
   public myGroup = new FormGroup({
      username: this.username,
      password: this.password
   });
    loginSubmit() {
      this.service.authenticateUser(this.myGroup.value).subscribe((data: any) => {
        this.service.setBearerToken(data.access_token);
        this.route.routeToDashboard();
      }, (error: any) => {
        this.submitMessage = error.message = 'Unauthorized';
      });
    }
}
