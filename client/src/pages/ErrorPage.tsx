import styled from "styled-components";
import ErrorComponent from "../components/ErrorComponent";

const ErrorPageContainer = styled.div`
    div {
        height: 65vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
export default function ErrorPage() {
    return (
        <ErrorPageContainer>
            <ErrorComponent />
        </ErrorPageContainer>
    );
}
