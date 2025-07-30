import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
interface Asset {
  name: string;
  ip: string;
  risk: 'Critical' | 'High' | 'Medium' | 'Low';
}

type RiskLevels = {
  critical: number;
  high: number;
  medium: number;
  low: number;
};

@Component({
  selector: 'app-risk-summary',
  imports: [TitleCasePipe],
  templateUrl: './risk-summary.html',
  styleUrl: './risk-summary.scss'
})
export class RiskSummary {
  @Input() set assets(value: Asset[]) {
    this._assets = value;
    this.computeRiskLevels();
  }

  private _assets: Asset[] = [];

  riskLevels: RiskLevels = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0
  };

  readonly levelKeys: (keyof RiskLevels)[] = ['critical', 'high', 'medium', 'low'];

  get totalRisk(): number {
    return Object.values(this.riskLevels).reduce((sum, val) => sum + val, 0);
  }

  private computeRiskLevels() {
    const levels: RiskLevels = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    };

    for (const asset of this._assets) {
      const riskKey = asset.risk.toLowerCase() as keyof RiskLevels;
      if (riskKey in levels) {
        levels[riskKey]++;
      }
    }

    this.riskLevels = levels;
  }
}
