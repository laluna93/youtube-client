import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fillters',
  templateUrl: './fillters.component.html',
  styleUrls: ['./fillters.component.scss'],
})
export default class FilltersComponent {
  @Output() activeFilter: EventEmitter<boolean> = new EventEmitter<boolean>();

  flag = false;

  clickFilter() {
    this.flag = !this.flag;
    this.activeFilter.emit(this.flag);
  }
}
