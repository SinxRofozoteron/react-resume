import styled from "styled-components";

import { Button } from "../models/Button";

export const AuthButton = styled(Button)`
    position: absolute;
    top: 75px;
    right: 20px;
    z-index: 10;
    a {
        color: inherit;
    }
`;