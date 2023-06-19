/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import CategoryPageComponent from "../components/CategoryPageComponent";

export default function ProductCategoryPage(props: any) {
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
    const ProductCard = styled.div`
        background: #f1f1f1;
        border-radius: 8px;
        text-align: center;
        padding: 0 1rem;
        width: 100%;
    `;
    const CardListContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 1rem 20rem;
        gap: 2rem;
    `;
    const ProductCardHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 1.28571px;
    `;
    const ProductCardSubHeading = styled.h6`
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    `;
    const ShopTextContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    `;

    const [filteredData, setFilteredData] = useState<any>("");
    const [filteredDataLoaded, setFilteredDataLoaded] = useState(false);
    const [mappedData, setMappedData] = useState<any>("");
    const [mappedDataLoaded, setMappedDataLoaded] = useState(false);
    useEffect(() => {
        if (props.data) {
            const filtereddata = props.data.filter((data: any) => {
                if (data.category === "headphones") {
                    return data;
                }
            });
            setFilteredData(filtereddata);
            setFilteredDataLoaded(true);
        }
    }, [props.data]);
    useEffect(() => {
        if (filteredDataLoaded) {
            const mappeddata = filteredData.map((data: any) => {
                return <CategoryPageComponent data={data} />;
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
                    <ProductCategoryHeader>
                        <h1>HEADPHONES</h1>
                    </ProductCategoryHeader>
                    {mappedData}
                    <CardListContainer>
                        <ProductCard>
                            <ProductCardHeading>HEADPHONES</ProductCardHeading>
                            <ShopTextContainer>
                                <ProductCardSubHeading>
                                    SHOP
                                </ProductCardSubHeading>
                                <SVG src="assets/shared/desktop/icon-arrow-right.svg" />
                            </ShopTextContainer>
                        </ProductCard>
                        <ProductCard>
                            <ProductCardHeading>SPEAKERS</ProductCardHeading>
                            <ShopTextContainer>
                                <ProductCardSubHeading>
                                    SHOP
                                </ProductCardSubHeading>
                                <SVG src="assets/shared/desktop/icon-arrow-right.svg" />
                            </ShopTextContainer>
                        </ProductCard>
                        <ProductCard>
                            <ProductCardHeading>EARPHONES</ProductCardHeading>
                            <ShopTextContainer>
                                <ProductCardSubHeading>
                                    SHOP
                                </ProductCardSubHeading>
                                <SVG src="assets/shared/desktop/icon-arrow-right.svg" />
                            </ShopTextContainer>
                        </ProductCard>
                    </CardListContainer>
                </>
            ) : (
                <h1>Empty</h1>
            )}
        </ProductCategoryContainer>
    );
}
