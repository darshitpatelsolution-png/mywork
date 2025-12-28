
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationsComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Public Applications | Darshit Patel Solution');
    this.meta.updateTag({ name: 'description', content: 'Explore and download personal software applications developed by Sapariya Darshit, available for public use.' });
  }

  applications = [
    {
      name: 'BillEXV',
      purpose: 'A simple desktop tool for small shop owners to manage their stock and sales.',
      features: ['Easy stock entry', 'Sales tracking', 'Low stock alerts', 'Print invoices', 'Data export', 'whatsapp sharing'],
      system: 'Windows 7/10/11',
      downloadLink: 'https://drive.google.com/drive/folders/1dv-F0m5MIE-h64XMjh7_g6nxXAJ5yM0r?usp=sharing',
      fileType: 'EXE',
      price: '2999 INR'
    }

   
  ];
}
