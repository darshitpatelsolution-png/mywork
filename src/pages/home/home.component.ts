
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.title.setTitle('Darshit Patel Solution | Custom Web & Desktop Software');
    this.meta.updateTag({ name: 'description', content: 'Expert freelance software developer in India offering custom web development and desktop application solutions for businesses. Reliable, affordable, and high-quality.' });
  }
}
