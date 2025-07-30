import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
interface MenuItem {
  icon: string;
  label: string;
  id: string;
}
@Component({
  selector: 'app-sidebar-item',
  imports: [RouterModule],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.scss'
})
export class SidebarItem {
  @Input() item!: MenuItem;
  @Input() menuActive = false;
  @Input() isSidebarCollapsed = false;
  @Output() itemSelected = new EventEmitter<MenuItem>();
  onItemClick() {
    this.itemSelected.emit(this.item);
  }
}
