import { Component } from '@angular/core';
import { RemediationTechnique } from './remediation-technique/remediation-technique';
@Component({
  selector: 'app-central-panel',
  imports: [RemediationTechnique],
  templateUrl: './central-panel.html',
  styleUrl: './central-panel.scss'
})
export class CentralPanel {
  infoList = [
    { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { label: 'Lorem Ipsum Dolor', value: 'Ut' },
    { label: 'Lorem Ipsum Dolor', value: 'Eros' },
    { label: 'Lorem Ipsum Dolor', icon: 'assets/icons/check.svg', value: 'Yes' },
    { label: 'Lorem Ipsum Dolor', value: 'Sit' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' }
  ];
}
