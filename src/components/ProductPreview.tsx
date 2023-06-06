import styled from "styled-components"
import ZX7image from '/assets/home/desktop/image-speaker-zx7.jpg';

export default function ProductPreview(){

    const ProductPreviewContainer = styled.div`
        display:flex;
        flex-direction: column;
        padding:1rem 20rem;
        gap:1rem;
    `
    const ZX9Container = styled.div`
        border-radius:8px;
        background-color: #D87D4A;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: space-around;
    `
    const ZX9Image = styled.img`
        width:100%;
    `
    const ZX9ImageContainer = styled.div`
        width:50%;
    `
    const ZX9Header = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 58px;
        letter-spacing: 2px;
        color:white;
    `
    const ZX9Description = styled.p`
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
    `
    const ZX9DescriptionContainer= styled.section`
        width:40%;
    `
    const ZX9Button = styled.button`
        background-color: #000000;
        color:white;
        padding:1rem;
    `
    const ZX7Container = styled.div`
        border-radius:8px;
        background-image: url(${ZX7image});
        background-repeat: no-repeat;
        background-size: cover;
        width:100%;
        height:34vh;
    `
    const ZX7DescriptionContainer = styled.section`
        width:40%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
    const ZX7Button = styled.button`
        border: 1px solid #000000;
        padding:1rem;
        color:black;
        font-weight:700;
        background: none;
        width:40%;
    `
    const YX1DescriptionContainer = styled.section`
        width:50%;
        background: #F1F1F1;
        border-radius:8px;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
    const YX1Container = styled.div`
        border-radius:8px;
        display:flex;
        width:100%;
        gap:1rem;
    `
    const StyledImgContainer = styled.div`
        width:50%;
    `
    const StyledImg = styled.img`
        width:100%;
        height:100%;
        border-radius:8px;
    `
    return(
        <ProductPreviewContainer>
            <ZX9Container>
                <ZX9ImageContainer>
                    <ZX9Image src="assets/home/desktop/image-speaker-zx9.png" />
                </ZX9ImageContainer>
                <ZX9DescriptionContainer>
                    <ZX9Header>ZX9 Speaker</ZX9Header>
                    <ZX9Description>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</ZX9Description>
                    <ZX9Button>SEE PRODUCT</ZX9Button>
                </ZX9DescriptionContainer>
            </ZX9Container>
            <ZX7Container>
                <ZX7DescriptionContainer>
                    <h2>ZX7 SPEAKER</h2>
                    <ZX7Button>SEE PRODUCT</ZX7Button>
                </ZX7DescriptionContainer>
            </ZX7Container>
            <YX1Container>
                <StyledImgContainer>
                    <StyledImg src="/assets/home/desktop/image-earphones-yx1.jpg" />
                </StyledImgContainer>
                <YX1DescriptionContainer>
                    <h2>YX1 EARPHONES</h2>
                    <ZX7Button>SEE PRODUCT</ZX7Button>
                </YX1DescriptionContainer>
            </YX1Container>
        </ProductPreviewContainer>
    )   
}