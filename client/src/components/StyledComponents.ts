import styled from "styled-components";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg/esm";
export const UnStyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    width: 100%;
`;
export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    z-index: 10;
`;
export const StyledSVG = styled(SVG)`
    cursor: pointer;
    transform: scale(1);
    transition: 0.3s;
    path {
        transition: 0.3s;
    }
    &:hover {
        path {
            transition: 0.3s;
            fill:#D87D4A;

        }
        transform: scale(1.2); 
        transition: 0.3s;
    }
    user-select: none;
    &:disabled{
        cursor: not-allowed;
        &:hover{
            path{
                fill:white;
            }
            transform:scale(1);
        }
    }
`;
export const OrangeButton = styled.button`
    background: #d87d4a;
    padding: 1rem;
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border:none;
    transition:0.3s;
    box-sizing: border-box;
    &:hover{
        transition:0.3s;
        background:#FBAF85;
    }
    width:100%;
    :disabled{
        cursor:not-allowed;
    }
`;
