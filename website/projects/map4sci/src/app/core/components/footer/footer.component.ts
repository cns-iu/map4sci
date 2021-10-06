import { ChangeDetectionStrategy, Component, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm4s-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @HostBinding('class') readonly clsName = 'm4s-footer';

  @Output() readonly termsClick = new EventEmitter<void>();
  @Output() readonly privacyClick = new EventEmitter<void>();
  @Output() readonly optClick = new EventEmitter<void>();
}
