import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'm4s-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'm4s-header';

  constructor() { }

  ngOnInit(): void {
  }

}
