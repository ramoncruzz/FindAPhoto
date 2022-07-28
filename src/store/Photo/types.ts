import {SearchResponse} from '../../utils/types';

export type Search = {
  term?: string;
  result?: SearchResponse;
  current?: boolean;
  isSearching: boolean;
  errorText?: string;
};

export interface SearchState {
  term: string | undefined;
  result: SearchResponse | undefined;
  current: boolean;
  isSearching: boolean;
  loading: boolean;
  errorText?: string | undefined;
}

export type SearchFulfilled = SearchResponse;
export type SearchRejected = {
  error?: string;
  message?: string;
};
