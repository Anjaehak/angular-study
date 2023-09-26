import { Injectable, OnInit, ViewChild } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Subject } from 'rxjs';

export type ModalProps = {
  component: any;
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  dismiss$ = new Subject<string | undefined>();

  constructor(public dialog: Dialog) {
    this.dialog.afterOpened.subscribe(() => {
      const container = document.querySelector('.cdk-overlay-container');
      if (container) container.id = 'cdk-overlay-container';

      const containerRef = document.getElementById('cdk-overlay-container');
      if (containerRef) containerRef.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });

    this.dialog.afterAllClosed.subscribe(() => {
      const containerRef = document.getElementById('cdk-overlay-container');
      if (containerRef) containerRef.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  open(props: ModalProps) {
    return this.dialog.open(props.component);
  }

  dismiss(role?: string) {
    this.dialog.closeAll();
    this.dismiss$.next(role);
  }
}
