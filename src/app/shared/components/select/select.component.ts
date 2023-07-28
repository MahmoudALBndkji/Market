import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  constructor() {}

  @Input() title: string = "";
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter();
  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
