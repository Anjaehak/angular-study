import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/services/modal.service';
import { UserWithdrawalCertifiedComponent } from './user-withdrawal-certified/user-withdrawal-certified.component';
import { RouterModule } from '@angular/router';
import { UserWithdrawCompleteComponent } from './user-withdraw-complete/user-withdraw-complete.component';

@Component({
  selector: 'app-user-withdrawal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-withdrawal.page.html',
  styleUrls: ['./user-withdrawal.page.scss'],
})
export default class UserWithdrawalPage {
  constructor(private modalService: ModalService) {}
  certifiedSNS() {
    const modal = this.modalService.open({
      component: UserWithdrawalCertifiedComponent,
    });

    modal.closed.subscribe(() => {
      this.modalService.dismiss$.subscribe((role) => {
        if (role === 'complete') {
        }
      });
    });
  }
  withdraw() {
    const modal = this.modalService.open({
      component: UserWithdrawCompleteComponent,
    });
  }
}
