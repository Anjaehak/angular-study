import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-change-passwrod-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-passwrod-complete.component.html',
  styleUrls: ['./change-passwrod-complete.component.scss'],
})
export class ChangePasswrodCompleteComponent {
  constructor(private modalService: ModalService) {}

  dismiss() {
    this.modalService.dismiss();
  }
}
