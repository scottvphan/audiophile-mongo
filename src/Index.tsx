/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useAuth0 } from "@auth0/auth0-react";

const GlobalStyle = createGlobalStyle`
    html,
    body,
    :root {
        margin: 0;
        padding: 0;
        font-family:'Manrope', Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
    }
    button {
        font-family:'Manrope', Arial, Helvetica, sans-serif;
        cursor:pointer;
    }
    input{
        font-family:'Manrope', Arial, Arial, Helvetica, sans-serif
    }
    img, SVG{
        user-select: none;
    }
`;

export default function Index({ data }: any) {
    const { isLoading } = useAuth0();
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/products"
                    element={<ProductCategoryPage data={data} />}
                >
                    <Route
                        path="/products/:id"
                        element={<ProductCategoryPage data={data} />}
                    />
                </Route>
                <Route
                    path="/products/details/:id"
                    element={<ProductDetailPage data={data} />}
                />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
        )
    );
    return (
        <>
            <GlobalStyle />
            {isLoading ? <></> : <RouterProvider router={router} />}
        </>
    );
}
