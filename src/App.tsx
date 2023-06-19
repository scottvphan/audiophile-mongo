import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import ProductCategoryPage from './pages/ProductCategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { useState, useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  :root {
    margin: 0;
    padding: 0;
    font-family:'Manrope', Arial, Helvetica, sans-serif;
  }
  button {
    font-family:'Manrope', Arial, Helvetica, sans-serif;
    cursor:pointer;
  }
`

function App() {
    const [data, setData] = useState<unknown>('')
  useEffect(() =>{
    fetch("/data.json")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductCategoryPage data={data} />}>
          <Route path='/products/:id' element={<ProductCategoryPage data={data} />}/>
        </Route>
        <Route path="/products/details/:id" element={<ProductDetailPage data={data} />} />
      </Route>
    )
  );  

  return (
    <>
      <Auth0Provider
        domain="dev-g4y2r5dknwja6vmn.us.auth0.com"
        clientId="lBcslrA0ORiR01tbzvT39N3mVItYqbsZ"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <GlobalStyle />
        <RouterProvider router={router} />
      </Auth0Provider>
    </>
  )
}

export default App
