interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ResultsSearch {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
}
