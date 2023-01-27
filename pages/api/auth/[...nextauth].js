import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [ 
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
  
}

export default NextAuth(authOptions)