export interface CsvAnalyzeResult {
  id: string;
  message: string;
  sentiment: string;
  score: number;
}

export interface PaginatedCsvResponse {
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
  data: CsvAnalyzeResult[];
}