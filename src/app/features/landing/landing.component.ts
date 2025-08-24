import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideArrowDown, lucideArrowRight, lucideGithub, lucideInstagram, lucideLinkedin, lucideScrollText } from '@ng-icons/lucide';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [provideIcons({ lucideInstagram, lucideGithub, lucideLinkedin , lucideArrowDown })],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  year = new Date().getFullYear();
}
