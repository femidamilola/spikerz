import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-profile',
  imports: [],
  templateUrl: './sidebar-profile.html',
  styleUrl: './sidebar-profile.scss'
})
export class SidebarProfile {
  @Input() isSidebarCollapsed: boolean = false;
}
