import { Component } from '@angular/core';
import { NetworkFlow } from "./network-flow/network-flow";
import { RiskSummary } from "./risk-summary/risk-summary";
import { AssetList } from "./asset-list/asset-list";
interface Asset {
  name: string;
  ip: string;
  risk: 'Critical' | 'High' | 'Medium' | 'Low';
}
@Component({
  selector: 'app-right-panel',
  imports: [NetworkFlow, RiskSummary, AssetList],
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.scss'
})
export class RightPanel {
  assets: Asset[] = [
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', risk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', risk: 'Critical' },
    { name: 'Server003', ip: '192.168.1.3', risk: 'Medium' },
    { name: 'Server004', ip: '192.168.1.4', risk: 'Low' }
  ]
}
