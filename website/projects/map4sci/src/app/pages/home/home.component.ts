import { ChangeDetectionStrategy, Component, HostBinding, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'm4s-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  @HostBinding('class') readonly clsName = 'm4s-home';

  @ViewChild('visualizer', { read: ElementRef }) visualizer: ElementRef<HTMLElement>;
  @ViewChild('markdown', { read: ElementRef }) markdown: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    window.addEventListener('load', () => {
      const { visualizer, markdown } = this;
      markdown.nativeElement.insertBefore(visualizer.nativeElement, markdown.nativeElement.children[1]);
    });
  }
}
