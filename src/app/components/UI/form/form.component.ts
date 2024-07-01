import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() email = '';
  @Input() password = '';
  @Input() submitText: string = '';
  @Input() onSubmit: (email: string, password: string) => void = () => {};

  @Output() formSubmit = new EventEmitter<void>();

  handleSubmit() {
    this.onSubmit(this.email, this.password);
    this.formSubmit.emit();
  }
}
