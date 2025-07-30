import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-container',
  imports: [],
  templateUrl: './server-container.html',
  styleUrl: './server-container.scss'
})
export class ServerContainer {
  @Input() name: string = 'Server';
  @Input() ipAddress: string = 'Server';

}
