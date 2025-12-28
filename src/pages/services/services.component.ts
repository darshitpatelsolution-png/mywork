
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Services | Custom Web & Desktop Application Development');
    this.meta.updateTag({ name: 'description', content: 'Offering professional services including custom website development, web applications, Windows desktop apps, software maintenance, and custom business tools.' });
  }

  services = [
    {
      title: 'Custom Website Development',
      description: 'Professional, SEO-friendly websites built from scratch to represent your brand and attract customers.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`
    },
    {
      title: 'Web Applications',
      description: 'Powerful web apps like admin panels, dashboards, and internal business tools to manage your operations efficiently.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>`
    },
    {
      title: 'Desktop Applications (Windows)',
      description: 'Custom desktop software for Windows, designed to perform specific tasks that web-based solutions can\'t handle.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>`
    },
    {
      title: 'Software Maintenance & Support',
      description: 'Ongoing support, updates, and bug fixes to ensure your applications run smoothly and securely.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L3 17.25l5.877 5.877a2.652 2.652 0 003.543 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122l2.472-2.472a3.375 3.375 0 00-4.773-4.773L2.25 12.375l5.877 5.877a2.652 2.652 0 003.543-.122zM19.5 2.25L12.375 9.375" /></svg>`
    },
     {
      title: 'Custom Business Tools',
      description: 'Development of bespoke tools like inventory managers, report generators, or data processors to automate your workflow.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.075c0 1.309-.853 2.4-1.938 2.661l-2.28.517a2.942 2.942 0 01-2.122 0l-2.28-.517c-1.085-.26-1.938-1.352-1.938-2.66V14.15m10.5 0v-1.625c0-1.309-.853-2.4-1.938-2.66l-2.28-.517a2.942 2.942 0 00-2.122 0l-2.28.517c-1.085.26-1.938 1.352-1.938 2.66v1.625m10.5 0h-10.5m10.5 0v-4.075a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v4.075m10.5 0h-10.5" /></svg>`
    }
  ];
}
