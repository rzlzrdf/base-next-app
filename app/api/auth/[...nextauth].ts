import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_URL,
	providers: [
		CredentialsProvider({
			type: 'credentials',
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				passsword: { label: 'Pasword', type: 'password' },
			},
			async authorize(credentials: any) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				const user: any = { id: 1, email: email, password: password };
				if (user) {
					return null;
				} else {
					return null;
				}
			},
		}),
	],
    callbacks: {
        jwt({token, account, profile, user}) {
            if(account?.provider === "credentials") {
                token.email === user.email
            }
            return token
        },

        async session({session, token}) {
            session.user === token.email;
            return session
        }
    }
};
