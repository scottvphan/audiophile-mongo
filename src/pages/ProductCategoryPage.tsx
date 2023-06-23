/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useEffect, useState } from "react";
import CategoryPageComponent from "../components/CategoryPageComponent";
import { useLocation } from "react-router-dom";
import ProductCardList from "../components/ProductCardList";
import {v4 as uuidv4} from 'uuid'
import ScrollToTop from "../utils/ScrollToTop";

const ProductCategoryContainer = styled.div`
    margin-bottom: 2rem;
`;
const ProductCategoryHeader = styled.header`
    background-color: black;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;
const ProductHeading = styled.h1`
    text-transform:uppercase;
`
export default function ProductCategoryPage(props: any) {
    const [filteredData, setFilteredData] = useState<any>("");
    const [filteredDataLoaded, setFilteredDataLoaded] = useState(false);
    const [mappedData, setMappedData] = useState<any>("");
    const [mappedDataLoaded, setMappedDataLoaded] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (props.data) {
            const filtereddata = props.data.filter((data: any) => {
                if (data.category === window.location.pathname.replace('/products/', '')) {
                    return data;
                }
            });
            setFilteredData(filtereddata);
            setFilteredDataLoaded(true);
        }
    }, [props.data, location]);
    useEffect(() => {
        if (filteredDataLoaded) {
            const mappeddata = filteredData.map((data: any) => {
                return <CategoryPageComponent key={uuidv4()} data={data} />;
            });
            const sortedData = mappeddata.reverse()
            setMappedData(sortedData);
            setMappedDataLoaded(true);
        }
    }, [filteredData, filteredDataLoaded]);
    return (
        <ProductCategoryContainer>
            {mappedDataLoaded ? (
                <>
                    <ScrollToTop />
                    <ProductCategoryHeader>
                        <ProductHeading>{window.location.pathname.replace('/products/', '')}</ProductHeading>
                    </ProductCategoryHeader>
                    {mappedData}
                    <ProductCardList />
                </>
            ) : (
                <h1>Empty</h1>
            )}
        </ProductCategoryContainer>
    );
}
