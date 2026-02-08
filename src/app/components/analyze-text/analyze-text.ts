import { Component, signal } from '@angular/core';
import { AnalyzeResponse } from '../../models/analyze-response.model';
import { AnalyzeService } from '../../services/analyze-service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-analyze-text',
  imports: [DecimalPipe],
  templateUrl: './analyze-text.html',
  styleUrl: './analyze-text.css',
})
export class AnalyzeText {
  text = signal('');
  loading = signal(false);
  error = signal<string | null>(null);
  result = signal<AnalyzeResponse | null>(null);

  constructor(private analyzeService: AnalyzeService) { }

  analyze(): void {
    this.error.set(null);
    this.result.set(null);

    if (!this.text().trim()) {
      this.error.set('El texto no puede estar vacío');
      return;
    }

    this.loading.set(true);

    this.analyzeService.analyzeText(this.text()).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error al analizar el texto');
        this.loading.set(false);
      }
    });
  }
}
