import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  imports: [NgStyle],
  templateUrl: './node.html',
  styleUrl: './node.scss'
})
export class Node {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() icon!: string;
  @Input() badgeIcon?: string;
  @Input() badgeColor?: string;
}
