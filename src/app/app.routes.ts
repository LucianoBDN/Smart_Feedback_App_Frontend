import { Routes } from '@angular/router';

export const routes: Routes = [
   {
  path: 'analyze-text',
  loadComponent: () =>
    import('./components/analyze-text/analyze-text')
      .then(m => m.AnalyzeText)
},   
   {
  path: 'analyze-csv',
  loadComponent: () =>
    import('./components/csv-analyze/csv-analyze')
      .then(m => m.CsvAnalyze)
}   
];
