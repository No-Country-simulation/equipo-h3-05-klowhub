import { Login } from '@/models'

// src/service/auth/sign-in.post.ts
async function signIn({ email, password }: Login) {
  const user = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const { error, data } = await user.json()

  if (error) {
    throw new Error(error)
  }

  return data
}

export { signIn }
