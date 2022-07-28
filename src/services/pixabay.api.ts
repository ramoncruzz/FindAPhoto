import service from './pixabay.service';
import {SearchResponse} from '../utils/types';

const SearchPhoto = (
  key: string,
  term: string,
  imageType?: 'all' | 'photo' | 'illustration' | 'vector',
): Promise<SearchResponse> =>
  new Promise<SearchResponse>((resolve, reject) => {
    console.log(`fetch ${term}`);
    service
      .get<SearchResponse>('api/', {
        params: {
          key,
          q: encodeURIComponent(term),
          image_type: imageType,
        },
      })
      .then(response => {
        console.log(`responde ${response.data}`);
        resolve({...response.data, term});
      })
      .catch((error: any) => {
        console.log(`ERROR ${error}`);
        reject(error)});
  });

export {SearchPhoto};
