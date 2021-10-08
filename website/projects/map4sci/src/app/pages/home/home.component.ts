import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';


@Component({
  selector: 'm4s-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  @HostBinding('class') readonly clsName = 'm4s-home';

  @ViewChild('markdown', { read: ElementRef }) markdown: ElementRef<HTMLElement>;
  @ViewChild('visualizer', { read: ElementRef }) visualizer: ElementRef<HTMLElement>;

  attachVisualizer(): void {
    const {
      visualizer: { nativeElement: visualizer },
      markdown: { nativeElement: markdown }
    } = this;
    const anchor = markdown.querySelector('.visualizer-anchor');
    markdown.insertBefore(visualizer, anchor);
  }
}
