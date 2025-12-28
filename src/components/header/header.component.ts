
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  themeService = inject(ThemeService);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
