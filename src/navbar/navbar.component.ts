import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroBriefcase, heroMagnifyingGlass, heroPercentBadge, heroUser,  } from '@ng-icons/heroicons/outline';
import { EventService } from '../event.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroChevronDown, heroBriefcase, heroMagnifyingGlass, heroPercentBadge, heroUser })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: EventService) {}

  onSignInClick() {
    console.log("test");
    
    this.authService.setShowSignIn(true);
  }

}
