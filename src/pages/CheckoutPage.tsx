/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";
import { useLayoutOutletContext } from "../components/Layout";
import GoBackButton from "../components/GoBackButton";
// import { useState, useEffect } from 'react'

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
    button{
        margin:1rem 0;
    }
`;

export default function CheckoutPage() {
    const { formData, setFormData, setIsCheckoutModalOpen } = useLayoutOutletContext()
    return (
        <CheckoutPageContainer>
            <GoBackButton />
            <CheckoutContainer>
                <CheckoutFormContainer>
                    <CheckoutForm formData={formData} setFormData={setFormData} setIsCheckoutModalOpen={setIsCheckoutModalOpen}  />
                </CheckoutFormContainer>
                <CheckoutSummaryContainer>
                    <CheckoutSummary />
                </CheckoutSummaryContainer>
            </CheckoutContainer>
        </CheckoutPageContainer>
    );
}
