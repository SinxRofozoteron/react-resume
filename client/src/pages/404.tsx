import { FC } from "react";
import styled from "styled-components";

const TextWrapper = styled.h1`
    display: block;
    height: 100%;
    text-align: center;
    padding: 10%;
`;

export const Page404: FC = () => {
    return <TextWrapper>Page not found ...</TextWrapper>;
};