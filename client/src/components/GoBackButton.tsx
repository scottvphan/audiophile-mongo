import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GoBack = styled.button`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    transition:0.15s;
    text-decoration: none;
    background: none;
    border:none;
    margin-bottom: 1rem;
    cursor:pointer;
    &:hover{
        transition:0.15s;
        color:#D87D4A;
    }
    text-decoration:none;
`;
export default function GoBackButton(){
    const navigate = useNavigate()
    return <GoBack onClick={() => navigate(-1)} >Go Back</GoBack>
}