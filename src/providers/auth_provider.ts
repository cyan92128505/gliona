import { FirebaseAuthProvider, RAFirebaseOptions } from 'react-admin-firebase';

import { AuthProvider, UserIdentity } from 'ra-core';

import FirebaseConfig from '../FIREBASE_CONFIG';

const options: RAFirebaseOptions = {
  logging: false,
  watch: [],
  persistence: 'local',
};
export const firebaseAuthProvider = FirebaseAuthProvider(FirebaseConfig, options);

class CustomAuthProvider {
  static get authProvider(): AuthProvider {
    return firebaseAuthProvider;
  }

  identity: UserIdentity = {
    id: '',
    fullName: '',
    avatar: '',
  };

  async GetUserIdentity(): Promise<UserIdentity> {
    try {
      const { uid, email, photoURL } = await CustomAuthProvider.authProvider.getAuthUser();
      this.identity = {
        id: uid,
        fullName: email,
        avatar: photoURL,
      };
    } catch (e) {
      this.identity = {
        id: '',
        fullName: '',
        avatar: '',
      };
    }
    return this.identity;
  }
}

const customAuthProvider = new CustomAuthProvider();

function Generator(): AuthProvider {
  return {
    identity: customAuthProvider.identity,
    login: firebaseAuthProvider.login,
    logout: firebaseAuthProvider.logout,
    checkAuth: firebaseAuthProvider.checkAuth,
    checkError: firebaseAuthProvider.checkError,
    getPermissions: firebaseAuthProvider.getPermissions,
    getIdentity: customAuthProvider.GetUserIdentity,

    getAuthUser: firebaseAuthProvider.getAuthUser,
    getJWTAuthTime: firebaseAuthProvider.getJWTAuthTime,
    getJWTExpirationTime: firebaseAuthProvider.getJWTExpirationTime,
    getJWTSignInProvider: firebaseAuthProvider.getJWTSignInProvider,
    getJWTClaims: firebaseAuthProvider.getJWTClaims,
    getJWTToken: firebaseAuthProvider.getJWTToken,
  };
}

export default Generator;
