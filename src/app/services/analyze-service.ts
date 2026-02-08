import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyzeResponse } from '../models/analyze-response.model';
import { CsvAnalyzeResult, PaginatedCsvResponse } from '../models/csv-analyze-result.model';

@Injectable({
  providedIn: 'root',
})
export class AnalyzeService {
    private readonly API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  
  analyzeText(text: string): Observable<AnalyzeResponse> {
    return this.http.post<AnalyzeResponse>(
      `${this.API_URL}/analyze`,
      { text }
    );
  }

  
analyzeCsv(
  file: File,
  page: number,
  pageSize: number
): Observable<PaginatedCsvResponse> {

  const formData = new FormData();
  formData.append('file', file);

  return this.http.post<PaginatedCsvResponse>(
    `${this.API_URL}/analyze-csv?page=${page}&page_size=${pageSize}`,
    formData
  );
}
}
