import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/services/modal.service';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';

@Component({
  selector: 'app-update-user-info',
  standalone: true,
  imports: [CommonModule, InputTextComponent],
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss'],
})
export class UpdateUserInfoComponent {
  constructor(private modalService: ModalService) {}

  dismiss(role?: string) {
    this.modalService.dismiss(role);
  }
}
