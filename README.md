# FindAPhoto

FindAPhoto App is a simple project that helps to understand important concepts on an React Native Project. Here you'll see How to:

- Implement a custom header bar using React Navigation;
- Implement a custom hook for applying the concept 'separetion of concerns';
- How to apply the concept of Atomic Design on Visual Components;
- Implement view page with less accomplement;
- Write test to test a custom hook;

I hope this help you in something

## Architecture

This project has been configured to use TypeScript and to get the best organization possible the `Find a Photo` project contains the following directories:
[`components`](./components):

> Where are the codes referring to visual components following the concept [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/).

[`src/hooks`](./src/hooks).

> In this directory is present the custom Hook useFirebase. Its use is a practical example of separation of responsibilities. In this project useFirebase is responsible for controlling all communications between the App and Firebase.

> On larger projects a custom Hook may have more responsibility, such as processing data for screens and implementing business rules at the mobile level.

[`src/routes`](./src/routes).

> In this directory are the settings related to the application navigation. In this project, the `react-native-navigation` library was used because it is a consolidated library, with good documentation and good support for React Hooks.

[`src/pages`](./src/pages).

> In this directory are the two pages of the project, Home and Detail.

[`src/services`](./src/services).

> This is one of the fundamental directories of this project. It contains the files:

- (i)`pixabay.service.ts` - responsible for providing an axios instance connected to the `pixabay.api.com` domain, in this project the use of this file was minimal, but it can be used to intercept requests and inject information into the header, such as Bearer Token, custom attributes, among others;
- (ii)`pixabay.api.ts` - responsible for mapping the routes used by the project.

[`src/store`](./src/store).

> This directory contains the entire implementation of state control with the Redux Toolkit library

[`src/util`](./src/util).

> This directory contains the types used in the project and functions for inserting the TestID to do tests end-to-end.

# Dependencies

- `@react-navigation `: Navigation Library
- `axios`: Library to do http requests
- `git-cz`: Library of commit support
- `@react-native-firebase`: Library for connecting with Google Firebase
- `@reduxjs/toolkit`: Library that back the App State Control
- `react-native-magnus`: Library for building Visual Components

# How to run the project

Clone the project

```js
git clone  git@github.com:ramoncruzz/FindAPhoto.git
```

and execute:

```js
yarn install && cd ios/ && pod install && cd ..
```

> [ios]:

```js
yarn ios
```

> [android]:

```js
yarn android
```

# know more

There are other really cool themes that I train in a sandbox project, Catinder, in it you'll find things like.

- [Certificate pinning] (https://github.com/ramoncruzz/catinder/tree/chore/ssl-pinning)
- [End-to-end testing] (https://github.com/ramoncruzz/catinder/tree/chore/afterTime)
- [CI/CD with bitrise] (https://github.com/ramoncruzz/catinder/tree/bitrise)
- [CI/CD with codemagic] (https://github.com/ramoncruzz/catinder/tree/codemagic)
