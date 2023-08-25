import styled from "styled-components";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const CheckoutModalContainer = styled.div`
    background-color: white;
    z-index: 101;
    padding: 3rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
    max-width: 648px;
    box-sizing: border-box;
    transition: 0.5s;
    a {
        button {
            margin: 2rem 0 0rem 0;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 80%;
        top: 50%;
        padding: 1rem;
        transition: 0.5s;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        top: 50%;
        padding: 1rem;
        transition: 0.5s;
    }
    text-align: center;
`;

const EmailHeading = styled.h1`
    font-size: 2rem;
    margin: 1.5rem 0;
`;
const EmailSubHeading = styled.h5`
    font-size: 1rem;
    margin: 1.5rem 0;
`;
const ResendVerification = styled.h6`
    color: lightskyblue;
    font-size: 0.8rem;
    cursor: pointer;
    margin: 1.5rem 0;
`;
const EmailParagraph = styled.h6`
    font-size: 0.8rem;
    margin: 1.5rem 0;
`;
export default function EmailVerificationModal({
    setIsEmailVerificationOpen,
}: any) {
    const { isAuthenticated, user } = useAuth0();
    const [isVerificationSent, setIsVerificatonSent] = useState<boolean>(false);
    const [authToken, setAuthToken] = useState<unknown>("");
    const [isTokenSaved, setIsTokenSaved] = useState<boolean>(false)

    function checkVerification() {
        isAuthenticated && !user?.email_verified
            ? setIsEmailVerificationOpen(true)
            : setIsEmailVerificationOpen(false);
        setIsVerificatonSent(true);
    }

    function checkToken(){
        axios.get(`http://localhost:4000/check-token:${user?.email}`)
        .then((res) => {
            console.log(res.data)
            setAuthToken(res.data.token)
        })
    }

    function accessAuth() {
        axios
            .get(`http://localhost:4000/auth-access:${user?.email}`)
            .then((res) => {
                console.log(res.data);
                setAuthToken(res.data.token);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    checkToken()

    function handleVerification() {
        if(!authToken){
            accessAuth();
        }
        const options = {
            method: "GET",
            url: "https://dev-g4y2r5dknwja6vmn.us.auth0.com/api/v2/users-by-email",
            params: { email: user?.email },
            headers: {
                authorization: `Bearer ${authToken}`,
            },
        };
        axios
            .request(options)
            .then((response) => {
                console.log(response.data[0]);
                axios.post("http://localhost:4000/verification", [
                    response.data[0],
                    [user?.email],
                    authToken,
                ]);
                setIsVerificatonSent(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            {isVerificationSent ? (
                <CheckoutModalContainer>
                    <EmailHeading>The verification email was sent</EmailHeading>
                    <EmailSubHeading>
                        This wlll close once your email is verified
                    </EmailSubHeading>
                    <EmailSubHeading>
                        Your link will expire in 24 hours
                    </EmailSubHeading>
                    <EmailParagraph>
                        Please check your inbox, if it doesn't appear please
                        check your spam folder
                    </EmailParagraph>
                </CheckoutModalContainer>
            ) : (
                <CheckoutModalContainer>
                    <EmailHeading>Your email is not verified</EmailHeading>
                    <EmailSubHeading>
                        Please check your email and verify before you can
                        continue
                    </EmailSubHeading>
                    <ResendVerification onClick={handleVerification}>
                        Click here to resend
                    </ResendVerification>
                </CheckoutModalContainer>
            )}
        </>
    );
}
