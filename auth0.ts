import { initAuth0, Session, } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default initAuth0({
  secret: process.env.AUTH0_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  authorizationParams: {
    redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
  },
  afterCallback: (
    _req: NextApiRequest,
    res: NextApiResponse,
    session: Session,
    _state: any // Replace `any` with a more specific type if possible
  ) => {
    res.setHeader('Location', '/dashboard');
    return session;
  },
});

