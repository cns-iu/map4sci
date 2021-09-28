import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm4s-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'm4s-footer';

  @Output() readonly contactClick = new EventEmitter<void>();
  @Output() readonly privacyClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
