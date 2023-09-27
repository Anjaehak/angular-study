import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-user-withdraw-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-withdraw-complete.component.html',
  styleUrls: ['./user-withdraw-complete.component.scss'],
})
export class UserWithdrawCompleteComponent {
  constructor(private modalService: ModalService) {}
  dismiss() {
    this.modalService.dismiss();
  }
}
