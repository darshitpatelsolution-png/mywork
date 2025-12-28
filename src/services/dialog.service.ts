
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isOpen = signal(false);
  title = signal('');
  message = signal('');

  open(title: string, message: string): void {
    this.title.set(title);
    this.message.set(message);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
