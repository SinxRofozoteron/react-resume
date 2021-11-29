import styled from "styled-components";

import Nav from "../models/MainNav";
import NavLink from "../models/NavLink";
import Divider from "../models/Divider";
import ContactInfoBtn from "./ContactInfoButton";

const StyledNav = styled(Nav).attrs(() => ({
    "aria-label": "Footer Navigation"
}))``;
const VDivider = <Divider height="70%" verticalMargin="auto" orientation="vertical" />;

const FooterNav: React.FC = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {VDivider}
                <li>
                    <ContactInfoBtn />
                </li>
            </ul>
        </StyledNav>
    );
};

export default FooterNav;