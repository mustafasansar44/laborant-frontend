import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginNav() {
  return (
    <>
      <li>
        <NavLink to="/auth/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Giriş Yap
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth/register" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Kaydol
        </NavLink>
      </li>

    </>
  )
}
