export const msalConfig = {
  auth: {
    clientId: `${import.meta.env.VITE_APP_AUTH_CLIENT_ID}`,
    authority: `${import.meta.env.VITE_APP_AUTHORITY}`,
    redirectUri: `${import.meta.env.VITE_APP_REDIRECT_URI}`,
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
}

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: [],
  // scopes: [`api://${import.meta.env.VITE_APP_AUTH_CLIENT_ID}/access_as_user`],
}

export const logoutRequest = () => {
  return false
}
