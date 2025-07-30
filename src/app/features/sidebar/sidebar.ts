import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidebarItem } from './sidebar-item/sidebar-item';
import { SidebarProfile } from "./sidebar-profile/sidebar-profile";
interface MenuItem {
  icon: string;
  label: string;
  id: string;
}
@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem, SidebarProfile],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  topMenuItems: MenuItem[] = [
    {
      icon: 'dash',
      label: 'Lorem',
      id: 'menu'
    },
    {
      icon: 'threat',
      label: 'Lorem',
      id: 'threat'
    },
    {
      icon: 'inventory',
      label: 'Lorem',
      id: 'inventory'
    },
    {
      icon: 'volner',
      label: 'Lorem',
      id: 'menu2'
    },
    {
      icon: 'integration',
      label: 'Lorem',
      id: 'integration'
    },
    {
      icon: 'policy',
      label: 'Lorem',
      id: 'policy'
    },
    {
      icon: 'report',
      label: 'Lorem',
      id: 'report'
    }
  ];
  bottomMenuItems: MenuItem[] = [
    {
      icon: 'setting',
      label: 'Lorem',
      id: 'setting'
    },
    {
      icon: 'notification',
      label: 'Lorem',
      id: 'notification'
    }
  ];
  activeItemID = this.topMenuItems[0].id || null;

  setActiveItem(item: MenuItem) {
    this.activeItemID = item.id;
  }
  isActive(item: MenuItem): boolean {
    return this.activeItemID === item.id;
  }
}
