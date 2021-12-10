import styled from "styled-components";

import { useAppSelector } from "../../app/hooks";
import { ThemeName } from "../../features/theme-slice";
import TrianglePng from "../models/Triangle";

const PngContainer = styled.div`
    background-color: ${({ theme }) => theme.fourthColor};
    img {
        height: 100%;
        width: 100%;
    }
`;

const ArrowRightSvg: React.FC<{ className?: string }> = ({ className }) => {
    const { theme } = useAppSelector(state => state.theme);

    return (
        <PngContainer className={className}>
            <TrianglePng color={theme === ThemeName.light ? "light" : "dark"} />
        </PngContainer>
    );
}

export default ArrowRightSvg;