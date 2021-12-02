import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.5rem;
    height: calc(100vh - 4.5rem - 4rem);
`;

export const Page404: React.FC = () => {
    return (
        <StyledMain>
            <h1>Page not found ...</h1>
        </StyledMain>
    );
};