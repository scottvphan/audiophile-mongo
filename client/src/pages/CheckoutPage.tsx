/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";
import { useLayoutOutletContext } from "../components/Layout";
import GoBackButton from "../components/GoBackButton";
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const CheckoutPageContainer = styled.div`
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
const CheckoutFormContainer = styled.div`
    width: 70%;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width:100%;
        padding:1rem;
    }
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
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width:100%;
        padding:1rem;
    }
`;

export default function CheckoutPage() {
    const { cart, formData, setFormData, setIsCheckoutModalOpen } = useLayoutOutletContext()
    const navigate = useNavigate();
    useEffect(() =>{
        if(Object.keys(cart).length === 0){
            navigate('/')
        }
    }, [cart, navigate])
    return (
        <CheckoutPageContainer>
            <GoBackButton />
            <CheckoutContainer>
                {/* <button onClick={() =>{console.log(location)}}>TEST</button> */}
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
