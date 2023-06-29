/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import ProductDetails from "../components/ProductDetailsComponent";
import ProductCardList from "../components/ProductCardList";
import AdComponent from "../components/AdComponent";
import ScrollToTop from "../utils/ScrollToTop";

const ProductDetailContainer = styled.div`
    padding: 0 20rem;
    margin: 2em 0;
    @media screen and (max-width:1440px) {
        padding: 0rem 5rem;
    }
    @media screen and (max-width:1024px) {
        padding: 0rem 2rem;
    }
`;

export default function ProductDetailPage(props: any) {
    const currentURL = window.location.pathname;
    const productName = currentURL
        .replace("/products/details/", "")
    const [filteredData, setFilteredData] = useState<any>("");
    const [filteredDataLoaded, setFilteredDataLoaded] = useState(false);
    const [mappedData, setMappedData] = useState<any>("");
    // const [mappedDataLoaded, setMappedDataLoaded] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (props.data) {
            const filtereddata = props.data.filter((data: any) => {
                if (data.slug === productName) {
                    return data;
                }
            });
            setFilteredData(filtereddata);
            setFilteredDataLoaded(true);
        }
    }, [props.data, location, productName]);
    useEffect(() => {
        if (filteredDataLoaded) {
            const mappeddata = filteredData.map((data: any) => {
                return <ProductDetails key={uuidv4()} data={data} />;
            });
            const sortedData = mappeddata.reverse();
            setMappedData(sortedData);
            // setMappedDataLoaded(true);
        }
    }, [filteredData, filteredDataLoaded]);
    return (
        <ProductDetailContainer>
            <ScrollToTop />
            {mappedData && mappedData}
            <ProductCardList />
            <AdComponent />
        </ProductDetailContainer>
    );
}
