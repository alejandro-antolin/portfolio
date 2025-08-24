import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ContactComponent } from './features/contact/contact.component';
import { LandingComponent } from './features/landing/landing.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ServicesComponent } from './features/services/services.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    LandingComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  activeSection = signal<string>('landing');

 constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

   ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        { threshold: 0.5 }
      );
      sections.forEach((sec) => observer.observe(sec));
    }
  }
}
