import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'm4s-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
}
