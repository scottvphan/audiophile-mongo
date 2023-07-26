import styled from "styled-components";
import CheckoutSummary from "../components/CheckoutSummary";
import GoBackButton from "../components/GoBackButton";

const CheckoutPageContainer = styled.div`
    min-height:65vh;
    padding: 1rem 20rem;
    background-color: #cfcfcf;
    @media screen and (max-width:1440px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width:1024px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width:768px) {
        padding:1rem;
    }
    @media screen and (max-width:560px) {
        padding:0.5rem;
    }
`;
const CheckoutContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    @media screen and (max-width: 768px) {
        flex-direction:column;
    }
`;
const CheckoutSummaryContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    align-self: flex-start;
    button{
        margin:1rem 0;
    }
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width:100%;
        padding:1rem;
    }
`;

export default function ConfirmationPage() {
    return (
        <CheckoutPageContainer>
            <GoBackButton />
            <CheckoutContainer>
                <CheckoutSummaryContainer>
                    <CheckoutSummary />
                </CheckoutSummaryContainer>
            </CheckoutContainer>
        </CheckoutPageContainer>
    );
}