import { Outlet, useOutletContext } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

import { useLogoutMutation, useMeQuery } from '@/services'

import 'react-toastify/dist/ReactToastify.css'

import s from './layout.module.scss'

import { Header } from './header'

type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const Layout = () => {
  const { data: dataMe, isError, isLoading } = useMeQuery()
  const [logout] = useLogoutMutation()

  const isAuthenticated = !isError && !isLoading

  const handleLogout = () => {
    logout()
  }

  const classNames = {
    content: s.main,
    layout: s.layout,
  }

  return (
    <div className={classNames.layout}>
      <Header
        avatar={dataMe?.avatar ?? ''}
        email={dataMe?.email ?? ''}
        isLoggedIn={isAuthenticated}
        name={dataMe?.name ?? ''}
        onSignOut={handleLogout}
      />
      <main className={classNames.content}>
        <Outlet context={{ isAuthenticated } satisfies AuthContext} />
      </main>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'dark'}
        transition={Bounce}
      />
    </div>
  )
}
