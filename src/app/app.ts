import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./features/sidebar/sidebar";
import { CentralPanel } from './features/central-panel/central-panel';
import { RightPanel } from "./features/right-panel/right-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, CentralPanel, RightPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('spikerz');
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
