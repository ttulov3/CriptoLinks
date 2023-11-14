import { createBrowserRouter } from 'react-router-dom'

import { Home } from './Pages/home'
import { Admin } from './Pages/admin'
import { Login } from './Pages/login'
import { Networks } from './Pages/networks'
import {Private} from './routes/Private.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: '/admin/social',
    element: <Networks/>
  }
])

export { router };