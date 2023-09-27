import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, InputTextComponent],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  constructor(private modalService: ModalService) {}

  dismiss(role?: string) {
    this.modalService.dismiss(role);
  }
}
