'use client'

import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({ showMenu: false, setShowMenu: () => {} })

export const GlobalProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <GlobalContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
