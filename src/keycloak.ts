export function KeycloakProvider(options: KeycloakProviderOptions) {
  const realm = options.realm || 'master';
  return {
    id: 'keycloak',
    name: 'Keycloak',
    type: 'oauth',
    version: '2.0',
    scope: 'openid',
    params: {
      grant_type: 'authorization_code',
      client_id: options.clientId,
      client_secret: options.clientSecret
    },
    accessTokenUrl: `${options.host}/auth/realms/${realm}/protocol/openid-connect/token`,
    authorizationUrl: `${options.host}/auth/realms/${realm}/protocol/openid-connect/auth`,
    profileUrl: `${options.host}/auth/realms/${realm}/protocol/openid-connect/userinfo`,
    profile: (profile: Profile) => {
      console.log('Got profile from keycloak: ', profile);
      return {
        id: '123',
        name: 'Jam',
        email: 'email@example.com'
      };
    },
    ...options
  };
}

export interface KeycloakProviderOptions {
  realm?: string;
  clientId: string;
  clientSecret: string;
  host: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
}
