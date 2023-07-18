import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ErrorContainer = styled.div`

`;

const GoBack = styled.button`
    font-size: 2rem;
    font-weight: 700;
    color: #000000;
    transition: 0.15s;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
        transition: 0.15s;
        color: #d87d4a;
    }
    text-decoration: none;
`;

export default function ErrorComponent() {
    const navigate = useNavigate()

    return (
        <ErrorContainer>
            <h1>There is nothing here... ¯\_(ツ)_/¯</h1>
            <GoBack onClick={() => navigate(-1)}>Go Back</GoBack>
        </ErrorContainer>
    );
}
