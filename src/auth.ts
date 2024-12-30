import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
// Your own logic for dealing with plaintext password strings; be careful!

/**
 * NextAuth.js configuration
 * @see https://next-auth.js.org/configuration/options
 */

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      /**
       * Specifies the credentials to be used for authentication.
       */
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Contraseña', type: 'password' }
      },
      authorize: async (credentials) => {
        /**
         * Logic to authenticate the user.
         * In this example, we are using a mock API to authenticate the user.
         */
        // const user = await signInService({
        //   email: credentials.email as string,
        //   password: credentials.password as string
        // })

        // if (!user) {
        //   throw new Error('Credenciales inválidas')
        // }

        return {
          email: 'teo@gmail.com',
          password: 'Teo#123'
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/sign-in',
    error: '/auth/sign-in'
  }
})
