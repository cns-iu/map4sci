import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'm4s-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostBinding('class') readonly clsName = 'm4s-header';
}
