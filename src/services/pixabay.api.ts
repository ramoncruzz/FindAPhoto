import service from './pixabay.service';
import {SearchResponse} from '../utils/types';

const SearchPhoto = (
  key: string,
  term: string,
  imageType?: 'all' | 'photo' | 'illustration' | 'vector',
): Promise<SearchResponse> =>
  new Promise<SearchResponse>((resolve, reject) => {
    service
      .get<SearchResponse>('api/', {
        params: {
          key,
          q: encodeURIComponent(term),
          image_type: imageType,
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch((error: any) => reject(error));
  });

export {SearchPhoto};
