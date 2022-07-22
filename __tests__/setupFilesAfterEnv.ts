import '@testing-library/jest-native/extend-expect';
jest.mock('react-native-config', () => {
  return {
    API_HOST: 'https://pixabay.com/',
  };
});
