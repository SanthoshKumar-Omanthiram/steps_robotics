import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import pool from '@/lib/db';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      let dbUser;

      if (account.provider === 'google') {
        const result = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [profile.email]
        );
        dbUser = result.rows[0];
        if (!dbUser) {
          const newUserResult = await pool.query(
            `INSERT INTO users (full_name, email, role)
             VALUES ($1, $2, $3)
             RETURNING id, full_name, email, role`,
            [profile.name, profile.email, 'student']
          );
          dbUser = newUserResult.rows[0];
        }
        user.id = dbUser.id;
        user.role = dbUser.role;
      }

      if (account.provider === 'twitter') {
        let email = user.email || profile.email || null;
        const result = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [email]
        );
        dbUser = result.rows[0];
        if (!dbUser) {
          const newUserResult = await pool.query(
            `INSERT INTO users (full_name, email, role)
             VALUES ($1, $2, $3)
             RETURNING id, full_name, email, role`,
            [profile.name, profile.email, 'student']
          );
          dbUser = newUserResult.rows[0];
        }
        user.id = dbUser.id;
        user.role = dbUser.role || null;
      }

      return true;
    },

    async jwt({ token, user, account }) {
      // Runs on first login
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role || null;
        token.provider = account?.provider || token.provider;

        // Google: create custom JWT & set cookie
        if (account?.provider === 'google') {
          const customToken = jwt.sign(
            {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
          token.customToken = customToken;

          cookies().set('token', customToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60,
          });
        }
        if (account?.provider === 'twitter') {
          const customToken = jwt.sign(
            {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
          token.customToken = customToken;

          cookies().set('token', customToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60,
          });
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.provider = token.provider;
      session.token = token.customToken || null;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      return `http://localhost:3000/dashboard`;
    }

  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
