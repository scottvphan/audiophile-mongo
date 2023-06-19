import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import ProductCategoryPage from './pages/ProductCategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { useState, useEffect } from 'react';

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
  }
`

function App() {
  const [data, setData] = useState<unknown>('')
  useEffect(() =>{
    fetch("../data.json")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductCategoryPage data ={data}/>}>
          <Route path='/products:id' element={<ProductDetailPage />} />
        </Route>
        <Route path="/products/detail" element={<ProductDetailPage />}></Route>
      </Route>
    )
  )

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
