import NextAuth from 'next-auth';
import { KeycloakProvider } from '~/keycloak';
import { NextApiRequest, NextApiResponse } from '~/types';

const options = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID || 'nestjs-keycloak-example',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || 'shhh',
      host: process.env.KEYCLOAK_HOST || 'http://localhost:8080',
      realm: process.env.KEYCLOAK_REALM || 'nestjs-keycloak-example'
    })
  ],
  debug: true
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('authing . . .');
  return NextAuth(req, res, options);
};
