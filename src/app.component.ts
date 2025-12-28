
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DialogComponent]
})
export class AppComponent {
  // Inject service to initialize it on app startup
  private readonly themeService = inject(ThemeService);
  // Make dialog service public for template access
  dialogService = inject(DialogService);
}
