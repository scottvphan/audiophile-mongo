/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { OrangeButton, UnStyledLink } from "./StyledComponents";

    const ProductCategoryListContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
    `;
    const ProductImageContainer = styled.div`
        width: 100%;
    `;
    const ProductImg = styled.img`
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
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        button{
            width:30%;
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
    `;
    const ProductDescriptionHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: #000000;
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
                        <ProductImg src={data.categoryImage.desktop} />
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
