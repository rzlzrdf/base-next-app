import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	secret: 'rahasia1q2w3e4r',
	providers: [
		CredentialsProvider({
			type: 'credentials',
			name: 'Credentials',
			credentials: {
                //Create FORM Login with Email and Password
				email: { label: 'Email', type: 'email', placeholder: "xample@mail.co" },
				password: { label: 'Password', type: 'password', placeholder: "Password" },
			},

			async authorize(credentials) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				const user: any = {
					id: 1,
					name: 'Rizal Lazuardi',
					email: 'staging@visuwisu.co',
					role: 'admin',
				};

                // Login Logic with database
				if (
					email === 'staging@visuwisu.co' &&
					password === 'in1pas5w0rdny4#'
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, profile, user }: any) {
			if (account?.providers === 'credentials') {
				token.email = user.email;
				token.fullname = user.fullname;
				token.role = user.role;
			}
			return token;
		},

		async session({ session, token }: any) {
			if ('email' in token) {
				session.user.email = token.email;
			}
			if ('fullname' in token) {
				session.user.fullname = token.fullname;
			}
			if ('role' in token) {
				session.user.role = token.role;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
