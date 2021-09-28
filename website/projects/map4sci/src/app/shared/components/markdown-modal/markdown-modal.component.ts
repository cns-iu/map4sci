import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


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
export class MarkdownModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: MarkdownModalData
  ) { }
}