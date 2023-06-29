/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { OrangeButton, UnStyledLink } from "./StyledComponents";

    const ProductCategoryListContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        @media screen and (max-width: 1440px) {
            gap:1rem;
        }
        @media screen and (max-width: 768px) {
            grid-template-columns:1fr;
        text-align:center;
        }
    `;
    const ProductImageContainer = styled.div`
        width: 100%;
        height:100%;
    `;
    const ProductImg = styled.img`
        width: 100%;
        height:100%;
        cursor: pointer;
        transition:0.3s;
        &:hover{
            transition:0.3s;
            transform: scale(1.05);
        }
    `;
    const ProductImgSource = styled.source`
        width: 100%;
        cursor: pointer;
        transition:0.3s;
        &:hover{
            transition:0.3s;
            transform: scale(1.05);
        }
    `;
    const ProductDescriptionContainer = styled.div`
        width: 100%;
        padding: 3rem;
        box-sizing:border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        button{
            width:60%;
        }
        @media screen and (max-width:1440px) {
            padding:1rem;
        }
        @media screen and (max-width: 768px) {
            align-items: center;
        }
    `;
    const ProductDescriptionNewTag = styled.h6`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #d87d4a;
        @media screen and (max-width: 768px) {
            text-align: center;
        }
    `;
    const ProductDescriptionHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: #000000;
        @media screen and (max-width:560px) {
            font-size:1.6rem;
        }
    `;
    const ProductDescription = styled.p`
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    `;
export default function CategoryPageComponent({data}:any) {

    return (
        <>
            <ProductCategoryListContainer>
                <ProductImageContainer>
                    <UnStyledLink to={`/products/details/${data.slug}`}>
                        <picture>
                            <ProductImgSource media="(max-width:1440px)" srcSet={data.categoryImage.desktop} />
                            <ProductImgSource media="(max-width:768px)" srcSet={data.categoryImage.tablet} />
                            <ProductImg src={data.categoryImage.mobile} />
                        </picture>
                    </UnStyledLink>
                </ProductImageContainer>
                <ProductDescriptionContainer>
                    {data.new &&
                        <ProductDescriptionNewTag>
                            NEW PRODUCT
                        </ProductDescriptionNewTag>
                    }
                    <ProductDescriptionHeading>
                        {data.name}
                    </ProductDescriptionHeading>
                    <ProductDescription>
                        {data.description}
                    </ProductDescription>
                    <UnStyledLink to={`/products/details/${data.slug}`}>
                        <OrangeButton>See Product</OrangeButton>
                    </UnStyledLink>
                </ProductDescriptionContainer>
            </ProductCategoryListContainer>
        </>
    );
}
