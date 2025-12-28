
import { Component, ChangeDetectionStrategy, OnInit, inject, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService } from '../../services/dialog.service';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly dialogService = inject(DialogService);

  submissionStatus = signal<'idle' | 'error'>('idle');

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required]
  });

  ngOnInit(): void {
  emailjs.init('-cnGGw8leVX47e4PR'); // Initialize EmailJS with your user ID

  this.title.setTitle('Contact & Hire Me | Freelance Software Developer');
  this.meta.updateTag({           
    name: 'description',
    content: 'Hire Sapariya Darshit for your next project. Contact for custom web and desktop application development.'
  });
}


  onSubmit(): void {
  if (this.contactForm.invalid) {
    this.submissionStatus.set('error');
    return;
  }

  const templateParams = {
    name: this.contactForm.value.name,
    email: this.contactForm.value.email,
    phone: this.contactForm.value.phone,
    message: this.contactForm.value.message,
  };

  emailjs
    .send(
      'service_06fayar',
      'template_u3bustw',
      templateParams
    )
    .then(
      () => {
        this.dialogService.open(
          'Message Sent!',
          'Thank you for contacting me. I will reply shortly.'
        );
        this.contactForm.reset();
        this.submissionStatus.set('idle');
      },
      (error) => {
        console.error('EmailJS Error:', error);
        this.submissionStatus.set('error');
      }
    );
}

}
