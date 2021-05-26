import React, { createContext } from 'react'

const HomeContext = createContext()
export const HomeContextProvider = HomeContext.Provider
export const HomeContextConsumer = HomeContext.Consumer
export default HomeContext;