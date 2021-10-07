import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseModalComponent } from '../base-modal/base-modal.component';


export interface MarkdownModalData {
  title: string;
  src: string;
}

@Component({
  selector: 'm4s-markdown-modal',
  templateUrl: './markdown-modal.component.html',
  styleUrls: ['./markdown-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownModalComponent extends BaseModalComponent {
  /** Default data. Used for type inference. */
  static readonly DEFAULT_DATA: MarkdownModalData;

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: MarkdownModalData) {
    super();
  }
}
