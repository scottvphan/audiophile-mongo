/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

    const ProductCategoryListContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 20rem;
        gap: 5rem;
    `;
    const ProductImageContainer = styled.div`
        width: 100%;
    `;
    const ProductImg = styled.img`
        width: 100%;
        cursor: pointer;
    `;
    const ProductDescriptionContainer = styled.div`
        width: 100%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
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
    const ProductButton = styled.button`
        background: #d87d4a;
        padding: 1rem;
        color: white;
        font-weight: 700;
        border: none;
        letter-spacing: 0.25em;
    `;
export default function CategoryPageComponent({data}:any) {
    const handleLinkClick = () =>{
        const productURL = `/products/details/${data.slug}`
        window.location.href = productURL
    }
    return (
        <>
            <ProductCategoryListContainer>
                <ProductImageContainer>
                    <ProductImg onClick={handleLinkClick} src={data.categoryImage.desktop} />
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
                    <ProductButton onClick={handleLinkClick}>See Product</ProductButton>
                </ProductDescriptionContainer>
            </ProductCategoryListContainer>
        </>
    );
}
