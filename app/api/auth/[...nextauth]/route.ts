import prisma from '@/utils/libs/prisma';
import { Account, NextAuthOptions, Profile, Session, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				//Create FORM Login with Email and Password
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'xample@mail.co',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Password',
				},
			},

			authorize: async credentials => {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				const user: any = await prisma.user.findUnique({
					where: {
						email,
					},
				});

				const userPassword = user.passwordHash;

				const isValidPassword = bcrypt.compareSync(
					password,
					userPassword
				);

				if (!credentials || !user || !isValidPassword) {
					return null;
				}

				return user;
			},
		}),
	],

	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
	},

	jwt: {
		async encode({ secret, token }) {
			if (!token) {
				throw new Error('No token to encode coy');
			}
			return jwt.sign(token, secret);
		},
		async decode({ secret, token }) {
			if (!token) {
				throw new Error('No token to decode coy');
			}
			const decodeToken = jwt.verify(token, secret);
			if (typeof decodeToken === 'string') {
				return JSON.parse(decodeToken);
			} else {
				return decodeToken;
			}
		},
	},

	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60,
	},

	callbacks: {
		async session(params: { session: Session; token: JWT; user: User }) {
			if (params.session.user) {
				params.session.user.email === params.token.email;
			}

			return params.session;
		},

		async jwt(params: {
			token: JWT;
			user?: User | undefined;
			account?: Account | null | undefined;
			profile?: Profile | undefined;
			isNewUser?: boolean | undefined;
		}) {
			if (params.user) {
				params.token.email = params.user.email;
			}

			return params.token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
