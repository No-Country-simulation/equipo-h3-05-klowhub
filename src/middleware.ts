import { auth } from '@/auth'
import { Route } from './const'

export default auth((req) => {
  if ((req.auth && req.nextUrl.pathname === Route.Login) || req.nextUrl.pathname === Route.Register) {
    return Response.redirect(Route.Home)
  }

  if ((!req.auth && req.nextUrl.pathname !== Route.Login) || req.nextUrl.pathname !== Route.Register) {
    const newUrl = new URL(Route.Login, Route.Login)
    return Response.redirect(newUrl)
  }
})
