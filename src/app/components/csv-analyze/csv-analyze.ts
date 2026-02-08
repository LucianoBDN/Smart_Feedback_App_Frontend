import { Component, signal } from '@angular/core';
import { AnalyzeService } from '../../services/analyze-service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-csv-analyze',
  imports: [DecimalPipe],
  templateUrl: './csv-analyze.html',
  styleUrl: './csv-analyze.css',
})
export class CsvAnalyze {
  file = signal<File | null>(null);
  results = signal<any[]>([]);
  loading = signal(false);

  page = signal(1);
  pageSize = 6;
  totalPages = signal(0);

  constructor(private analyzeService: AnalyzeService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.file.set(input.files[0]);
      this.page.set(1);
    }
  }

  analyze() {
    if (!this.file()) return;

    this.loading.set(true);

    this.analyzeService
      .analyzeCsv(this.file()!, this.page(), this.pageSize)
      .subscribe({
        next: (res) => {
          this.results.set(res.data);
          this.totalPages.set(res.total_pages);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
  }

  nextPage() {
    if (this.page() < this.totalPages()) {
      this.page.update(p => p + 1);
      this.analyze();
    }
  }

  prevPage() {
    if (this.page() > 1) {
      this.page.update(p => p - 1);
      this.analyze();
    }
  }
}
