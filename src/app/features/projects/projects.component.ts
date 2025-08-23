import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

type ProjectType = 'all' | 'web' | 'libs' | 'apps';

interface Project {
  id: string;
  title: string;
  type: ProjectType;
  summary: string;
  image: string; 
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('gridIn', [
      transition(':enter', [
        query('@cardIn', stagger(60, []), { optional: true }),
      ]),
    ]),
    trigger('cardIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('280ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private data = signal<Project[]>([
    {
      id: 'zero-to-hero',
      title: 'Zero to HERO',
      summary: 'Aplicación web destinada a entrenadores y llevar el seguimiento de sus atletas',
      type: 'web',
      image: 'assets/images/z2h-preview.png'
    }
  ]);

  filters = signal<ProjectType[]>(['all', 'web', 'libs', 'apps']);
  filter = signal<ProjectType>('all');

  visibles = computed(() => {
    const f = this.filter();
    const list = this.data();
    return f === 'all' ? list : list.filter((p) => p.type === f);
  });

  setFilter(f: ProjectType) {
    this.filter.set(f);
  }
}
