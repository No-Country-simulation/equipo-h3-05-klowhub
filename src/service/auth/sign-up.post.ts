import { Register } from '@/models'

async function signUp({ email, password, avatarUrl, lastName, name }: Register) {
  const user = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      avatarUrl: 'avatar1.png',
      lastName,
      name
    })
  })

  const { error, data } = await user.json()

  return { error, data }
}

export { signUp }
