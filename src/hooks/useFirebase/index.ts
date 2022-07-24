import {useCallback} from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import {
  initialState as defaultValuesEnv,
  setEnvironment,
} from '../../store/Environment';
import {useAppDispatch} from '../../store';
import {envMobile} from './types';
const apiKey = 'apiKey';

export const getEnvMobile = (envName: string): envMobile => {
  try {
    const stringRecoverd = remoteConfig().getValue(envName)?.asString();
    if (stringRecoverd.length > 0) {
      return {apiKey: stringRecoverd};
    }
    return defaultValuesEnv;
  } catch (error) {
    return defaultValuesEnv;
  }
};

const useFirebase = () => {
  const dispatch = useAppDispatch();

  const initRemoteConfig = useCallback(
    () =>
      new Promise<void>((resolve, reject) => {
        remoteConfig()
          .fetchAndActivate()
          .then(() => resolve())
          .catch(error => reject(error));
      }),
    [],
  );
  const getEnvironmentMobile = useCallback(
    (envName: string): Promise<envMobile> =>
      new Promise<envMobile>((resolve, reject) => {
        try {
          remoteConfig()
            .fetchAndActivate()
            .then(() => {
              const pixabayKey = remoteConfig().getValue(envName)?.asString();
              resolve({apiKey: pixabayKey});
            })
            .catch(error => reject(error));
        } catch (error) {
          reject(error);
        }
      }),
    [],
  );

  const loadEnvironmet = useCallback(
    (): Promise<void> =>
      new Promise((resolve, reject) => {
        getEnvironmentMobile(apiKey)
          .then(env => {
            dispatch(setEnvironment({apiKey: env.apiKey}));
            resolve();
          })
          .catch(error => {
            dispatch(setEnvironment({apiKey: undefined}));
            reject(error);
          });
      }),
    [dispatch, getEnvironmentMobile],
  );

  return {
    initRemoteConfig,
    getEnvironmentMobile,
    loadEnvironmet,
  };
};
export default useFirebase;
