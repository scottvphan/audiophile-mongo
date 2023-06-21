/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg"
// import ProductCardList from "../components/ProductCardList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import ProductDetails from "../components/ProductDetailsComponent";

const ProductDetailContainer = styled.div`
    padding: 0 20rem;
    margin: 2em 0;
`;
// const ProductDetail = styled.div`
//     display: flex;
// `;
// const ProductImageContainer = styled.div`
//     width: 100%;
// `;
// const ProductImg = styled.img`
//     width: 100%;
// `;
// const ProductDescriptionContainer = styled.div`
//     width: 100%;
//     padding: 3rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
//     align-items: flex-start;
// `;
// const ProductDescriptionNewTag = styled.h6`
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 19px;
//     letter-spacing: 10px;
//     text-transform: uppercase;
//     color: #d87d4a;
// `;
// const ProductDescriptionHeading = styled.h1`
//     font-style: normal;
//     font-weight: 700;
//     font-size: 40px;
//     line-height: 44px;
//     letter-spacing: 1.42857px;
//     text-transform: uppercase;
//     color: #000000;
// `;
// const ProductDescription = styled.p`
//     font-style: normal;
//     font-weight: 500;
//     font-size: 15px;
//     line-height: 25px;
//     color: #000000;
//     mix-blend-mode: normal;
//     opacity: 0.5;
// `;
// const ProductButton = styled.button`
//     background: #d87d4a;
//     padding: 1rem;
//     color: white;
//     font-weight: 700;
//     border: none;
//     letter-spacing: 0.25em;
// `;
// const InputContainer = styled.div`
//     display: flex;
//     gap: 1rem;
// `;
// const Input = styled.input`
//     width: 40%;
// `;
// const FeaturesContainer = styled.div`
//     display: flex;
// `;
// const FeatureContainer = styled.div``;
// const InTheBoxContainer = styled.div``;
// const ImageGalleryContainer = styled.div`
//     display: grid;
//     grid-template-areas:
//         "a b"
//         "c b";
//     gap: 1rem;
// `;
// const Image1 = styled.img`
//     grid-area: a;
//     width: 100%;
//     height: 100%;
// `;
// const Image2 = styled.img`
//     grid-area: c;
//     width: 100%;
//     height: 100%;
// `;
// const Image3 = styled.img`
//     grid-area: b;
//     width: 100%;
//     height: 100%;
// `;
// const RecommendationHeading = styled.h1`
//     text-align: center;
// `;
// const StyledLink = styled(Link)`
//     text-decoration: none;
//     font-weight: 700;
//     color: #d87d4a;
// `;
const ProductListContainer = styled.div`
    background-color: white;
    margin:2rem 0;
`;
const ProductCard = styled(Link)`
    background: #f1f1f1;
    border-radius: 8px;
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    text-decoration: none;
    color: inherit;
`;
const CardListContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
const ProductImage = styled.img`
    position: relative;
    width: 100%;
`;
export default function ProductDetailPage(props: any) {
    const currentURL = window.location.pathname;
    const productName = currentURL
        .replace("/products/details/", "")
    console.log(productName)
    const [filteredData, setFilteredData] = useState<any>("");
    const [filteredDataLoaded, setFilteredDataLoaded] = useState(false);
    const [mappedData, setMappedData] = useState<any>("");
    const [mappedDataLoaded, setMappedDataLoaded] = useState(false);
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
            setMappedDataLoaded(true);
        }
    }, [filteredData, filteredDataLoaded]);
    return (
        <ProductDetailContainer>
            {mappedDataLoaded && mappedData}
            <ProductListContainer>
                <CardListContainer>
                    <ProductCard to={"/products/headphones"}>
                        <ProductImage src="/assets/shared/desktop/image-category-thumbnail-headphones.png" />
                        <ProductCardHeading>HEADPHONES</ProductCardHeading>
                        <ShopTextContainer>
                            <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                            <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                        </ShopTextContainer>
                    </ProductCard>
                    <ProductCard to={"/products/speakers"}>
                        <ProductImage src="/assets/shared/desktop/image-category-thumbnail-speakers.png" />
                        <ProductCardHeading>SPEAKERS</ProductCardHeading>
                        <ShopTextContainer>
                            <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                            <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                        </ShopTextContainer>
                    </ProductCard>
                    <ProductCard to={"/products/earphones"}>
                        <ProductImage src="/assets/shared/desktop/image-category-thumbnail-earphones.png" />
                        <ProductCardHeading>EARPHONES</ProductCardHeading>
                        <ShopTextContainer>
                            <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                            <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                        </ShopTextContainer>
                    </ProductCard>
                </CardListContainer>
            </ProductListContainer>
        </ProductDetailContainer>
    );
}
