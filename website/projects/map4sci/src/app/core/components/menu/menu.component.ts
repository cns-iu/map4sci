import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'm4s-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent { }
