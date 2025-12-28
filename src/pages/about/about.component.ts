
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Sapariya Darshit | Freelance Developer India');
    this.meta.updateTag({ name: 'description', content: 'Learn about Sapariya Darshit, a dedicated freelance web and desktop software developer from India, focused on delivering quality and reliable business solutions.' });
  }
}
