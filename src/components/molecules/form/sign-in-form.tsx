'use client'
import {
  AuthProviders,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/'
import { Route } from '@/const'
import { signInSchema, SignInSchema } from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function SignInForm() {
  /**
   * The `useForm` hook is used to create a form instance for the sign-in form.
   * It takes a Zod schema as an argument and returns a form instance with the specified schema.
   * The form instance is used to handle form state, validation, and submission.
   */
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  /**
   * Submits the sign-in form, logging the `SignInSchema` values to the console.
   * @param values - The `SignInSchema` values to log.
   */
  async function onSubmit(values: SignInSchema) {
    try {
      const response = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: Route.Login
      })

      if (response?.error) return toast.error(response.error)

      toast.success('¡Bienvenido de nuevo!')
    } catch (error) {
      toast.error('Error al iniciar sesion')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full grid max-w-[450px]'>
        <div className='grid gap-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white text-lg'> Correo electrónico</FormLabel>
                <FormControl>
                  <Input className='h-14' placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white text-lg'>Contraseña</FormLabel>
                <FormControl>
                  <Input className='h-14' placeholder='Contraseña' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <AuthProviders title='O ingresa con' />
        <Link className='text-start font-bold text-text_1' href={Route.forgetPassword}>
          Olvide mi contraseña
        </Link>
        <FormDescription className='text-start text-white pb-5'>
          ¿Aún no tiene cuenta?{'  '}
          <Link className='text-[#BCA2FF]' href={Route.Register}>
            Registrate
          </Link>
        </FormDescription>
        <Button
          className='bg-primary_500 text-heading_2 text-white px-20 py-4 font-semibold justify-self-center'
          type='submit'
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <Loader2Icon size={20} className='animate-spin' /> : 'Iniciar Sesión'}
        </Button>
      </form>
    </Form>
  )
}

export { SignInForm }

