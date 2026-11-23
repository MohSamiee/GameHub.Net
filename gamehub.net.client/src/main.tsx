import react from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
createRoot(document.getElementById('root')!).render(
  <react.StrictMode>
  <ChakraProvider value={defaultSystem}>
    <App />
  </ChakraProvider> 
  </react.StrictMode>,
)
