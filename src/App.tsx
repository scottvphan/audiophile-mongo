import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import ProductCategoryPage from './pages/ProductCategoryPage'

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/product" element={<ProductCategoryPage />}>
        <Route path='/product:id' element={<ProductCategoryPage />} />
      </Route>
    </Route>
  )
)

function App() {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
