import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ServicesComponent } from './features/services/services.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent, ServicesComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
