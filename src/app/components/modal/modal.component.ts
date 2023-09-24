import { Component, Input, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, Dialog } from '@angular/cdk/dialog';

export type ModalProps = {
  component: any;
  data: any;
};

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() props: ModalProps | undefined;
  @Input() isOpen = false;

  get _isOpen() {
    return signal(this.isOpen);
  }

  constructor(public dialog: Dialog) {
    effect(() => {
      if (this._isOpen()) {
        this.openDialog();
      }
    });
  }

  openDialog() {
    if (this.props) {
      this.dialog.open(this.props.component, {
        ...this.props.data,
      });
    }
  }
}
