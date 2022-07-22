import {SearchPhoto} from '../../src/services/pixabay.api';

jest.mock('react-native-config', () => {
  return {
    API_HOST: 'https://pixabay.com/',
  };
});

describe('Testing the requests to Pixabay', () => {
  it('should do request ', async () => {
    const key = '1256271-c8154b0ac1a6d22ff35dbd798';
    const term = 'street';
    const type = 'photo';
    const response = await SearchPhoto(key, term, type);
    expect(response.total).toBeGreaterThan(0);
    expect(response.hits.length).toBeGreaterThan(0);
  });
});
