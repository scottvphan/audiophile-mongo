import styled from "styled-components";
import { RaceBy } from "@uiball/loaders";

const LoaderContainer = styled.div`
    color:black;
    box-sizing:border-box;
    margin:0 auto;
    display:flex;
    justify-content: center;
`

export default function LoaderComponent(){
    return (
        <LoaderContainer>
            <RaceBy size={100} />
        </LoaderContainer>
    )
}