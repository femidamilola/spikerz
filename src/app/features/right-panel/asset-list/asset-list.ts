import { Component, Input } from '@angular/core';
import { ServerContainer } from '../../../shared/components/server-container/server-container';
interface Asset {
  name: string;
  ip: string;
  risk: 'Critical' | 'High' | 'Medium' | 'Low';
}
@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [ServerContainer],
  templateUrl: './asset-list.html',
  styleUrl: './asset-list.scss'
})
export class AssetList {
  currentPage = 1;
  pageSize = 2;
  @Input() assets!: Asset[];
  get paginatedAssets() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.assets.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.assets.length / this.pageSize);
  }

  get showingRange(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.assets.length);
    return `Showing ${start}-${end} of ${this.assets.length}`;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
