import { handleCallback, Session } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  try {
    await handleCallback(req, res, {
      afterCallback: (
        _req: NextApiRequest,
        _res: NextApiResponse,
        session: Session
      ): Session => {
        // Modify session if needed
        return session;
      }
    });
    // Handle redirect after successful authentication
    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.status(500).end('Authentication callback error');
  }
}
