import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/themes.ts'
import { GlobalStyle } from './styles/global.ts'
import { TransactionProvider } from './contexts/TransactionsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TransactionProvider>
        <App /> 
      </TransactionProvider>
    </ThemeProvider>
  </StrictMode>,
)
