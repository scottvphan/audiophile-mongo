import styled from "styled-components";

const AdContainer = styled.div`
    display: flex;
    margin: 4rem 0;
    gap:0 1rem;
`;
const TextContainer = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Heading = styled.h1`
    color: #000;
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.429px;
    text-transform: uppercase;
`;
const StyledSpan = styled.span`
    color: #d87d4a;
`;
const Description = styled.p`
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
`;
const ImageContainer = styled.div`
    width:50%;
`
const StyledImg = styled.img`
    width:100%;
`
export default function AdComponent() {
    return (
        <AdContainer>
            <TextContainer>
                <Heading>
                    BRINGING YOU THE <StyledSpan>BEST</StyledSpan> AUDIO GEAR
                </Heading>
                <Description>
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </Description>
            </TextContainer>
            <ImageContainer>
                <StyledImg src="/assets/shared/desktop/image-best-gear.jpg" />
            </ImageContainer>
        </AdContainer>
    );
}
