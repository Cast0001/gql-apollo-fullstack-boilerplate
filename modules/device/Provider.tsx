import React from 'react'


declare global {
  interface Window {
    __DEVICE__: DeviceContext
  }

  type DeviceContext = {
    os: string
    platform: string
    browser: string
    version: string
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    isBot: boolean
  }
}

export const Context = React.createContext<DeviceContext>(null)

type ProviderProps = {
  value: DeviceContext
}

const Provider: React.FunctionComponent<ProviderProps> = ({ children, value }) => (
  <Context.Provider value={value}>
    {children}
  </Context.Provider>
)


export default Provider
