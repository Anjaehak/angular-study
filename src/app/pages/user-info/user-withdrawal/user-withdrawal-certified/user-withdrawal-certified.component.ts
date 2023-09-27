import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-user-withdrawal-certified',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-withdrawal-certified.component.html',
  styleUrls: ['./user-withdrawal-certified.component.scss'],
})
export class UserWithdrawalCertifiedComponent {
  constructor(private modalService: ModalService) {}

  dismiss() {
    this.modalService.dismiss();
  }
}
