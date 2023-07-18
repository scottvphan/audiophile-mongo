import styled from "styled-components";
import { Ring } from "@uiball/loaders";

const LoaderContainer = styled.div`
    color:black;
    box-sizing:border-box;
    margin:0 auto;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const StyledHeading = styled.h1`
    font-size:4rem;
`
export default function Loader(){
    return (
        <LoaderContainer>
            <StyledHeading>Loading</StyledHeading>
            <Ring size={100} />
        </LoaderContainer>
    )
}