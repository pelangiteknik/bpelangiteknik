// import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "Email",
                    placeholder: "example"
                },
                password: {
                    label: "password",
                    type: "password",
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null
                console.log(credentials);


                if (credentials?.email !== 'rio@rio.com' && credentials?.password !== '12345')
                    return null

                const user = { id: "99999999", username: "Hallo", email: "rio@rio.com" }
                if (credentials?.email == 'rio@rio.com' && credentials?.password == '12345')
                    return user
            }
        }
        )
    ], callbacks: {
        jwt({ token, user }) {
            if (!user) return token

            return { ...token, id: user.id }
        },
        session({ session, token }) {
            return {
                ...session,
                id: token.id
            }
        }
    },
    pages: {
        signIn: "/"
    }

}