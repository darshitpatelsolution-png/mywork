import { DOCUMENT } from '@angular/common';
import { Injectable, signal, effect, inject, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Fix: Explicitly type `document` as `Document` because `inject(DOCUMENT)` can be inferred as `unknown` in strict mode.
  private readonly document: Document = inject(DOCUMENT);

  theme = signal<'light' | 'dark'>(this.getInitialTheme());
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'dark') {
        this.document.documentElement.classList.add('dark');
      } else {
        this.document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): 'light' | 'dark' {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light'; // Default to light if no preference
  }
}
