import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMark } from '@ng-icons/heroicons/outline'
import { Subscription } from 'rxjs';
import { EventService } from '../event.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NgIconComponent, NgIf, FormsModule, ],
  providers: [provideIcons({ heroXMark })],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit, OnDestroy {
  show = false;
  phone: string = '';
  name: string = '';
  email: string = '';

  private subscription: Subscription | undefined;

  constructor(private authService: EventService, private auth: AuthService) { }

  submitForm() {
    const data = {
      phone: this.phone,
      name: this.name,
      email: this.email,
      isLogin: this.login,
    };

    this.auth.authenticateUser(data).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }


  ngOnInit() {
    this.subscription = this.authService.showSignIn$.subscribe(value => {
      this.show = value;
      console.log("got");
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login = true;

  toggleLogin = () => {
    this.login = !this.login;
  }

  close() {
    this.show = false;
  }
}
