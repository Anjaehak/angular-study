import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-update-user-info-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-user-info-complete.component.html',
  styleUrls: ['./update-user-info-complete.component.scss'],
})
export class UpdateUserInfoCompleteComponent {
  constructor(private modalService: ModalService) {}

  dismiss() {
    this.modalService.dismiss();
  }
}
