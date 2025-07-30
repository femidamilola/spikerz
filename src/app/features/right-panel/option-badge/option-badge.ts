import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-badge',
  imports: [],
  templateUrl: './option-badge.html',
  styleUrl: './option-badge.scss'
})
export class OptionBadge {

  @Input() color: string = '#e53935';
  @Input() icon: string = 'shield-x';
  @Input() text: string = 'Lorem';
}
