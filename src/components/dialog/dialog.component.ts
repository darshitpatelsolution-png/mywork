
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  isOpen = input.required<boolean>();
  title = input<string>('');
  message = input<string>('');
  close = output<void>();

  closeDialog(): void {
    this.close.emit();
  }
}
