import {SearchResponse} from '../../utils/types';

export type Search = {
  term?: string;
  result?: SearchResponse;
  current?: boolean;
  isSearching: boolean;
  errorText?: string;
};
