import { Component, Input } from '@angular/core';
import { ServerContainer } from '../../../shared/components/server-container/server-container';
@Component({
  selector: 'app-remediation-technique',
  imports: [ServerContainer],
  templateUrl: './remediation-technique.html',
  styleUrl: './remediation-technique.scss'
})
export class RemediationTechnique {
  @Input() title: string = 'Lorem P';
  @Input() ipAddress: string = 'Server';
  @Input() description: string = 'Lorem ipsum Dolor Sit Amet Consectetur'
  @Input() info?: string;
}
