/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { useRef } from "react";

const CheckoutPageContainer = styled.div`
    padding: 1rem 20rem;
    background-color: #cfcfcf;
`;
const CheckoutContainer = styled.div`
    display: flex;
    gap: 1.5rem;
`;
const CheckoutFormContainer = styled.div`
    width: 70%;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
`;
const CheckoutSummaryContainer = styled.div`
    width: 30%;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    align-self: flex-start;
`;
const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    transition:0.15s;
    text-decoration: none;
    &:hover{
        transition:0.15s;
        color:#D87D4A;
    }
`;
interface FormValues {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipcode: number;
    city: string;
    country: string;
    // eMoney: boolean;
    // cash: boolean;
    eMoneyNumber: string;
    eMoneyPin: string;
}

export default function CheckoutPage() {
    const formRef = useRef();
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        <CheckoutPageContainer>
            <StyledLink to={'..'}>Go Back</StyledLink>
            <CheckoutContainer>
                <CheckoutFormContainer>
                    <CheckoutForm forwardedRef={formRef} onSubmit = {onSubmit} />
                </CheckoutFormContainer>
                <CheckoutSummaryContainer>
                    <CheckoutSummary onSubmit = {onSubmit} formRef={formRef} />
                </CheckoutSummaryContainer>
            </CheckoutContainer>
        </CheckoutPageContainer>
    );
}
