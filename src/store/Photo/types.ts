import {SearchResponse} from '../../utils/types';

export type Search = {
  term?: string;
  result?: SearchResponse;
  current?: boolean;
  isSearching: boolean;
  errorText?: string;
};
export type SearchFulfilled = SearchResponse;
export type SearchRejected = {
  error?: string;
  message?: string;
};
