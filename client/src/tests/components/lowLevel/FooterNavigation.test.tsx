import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import FooterNav from "../../../components/lowLevel/FooterNavigation";
import { store } from "../../../app/store";
import { StyleManager } from "../../../components/lowLevel/StyleManager";

describe("Test FooterNavigation component", () => {

    const Wrapper: React.FC = ({ children }) => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <StyleManager>
                        {children}
                    </ StyleManager>
                </Provider>
                <Switch>
                    <Route exact path="/">
                        <div id="test-id" />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }

    let nav: HTMLElement | null;
    beforeEach(() => {
        render(<FooterNav />, { wrapper: Wrapper });
        nav = screen.queryByRole("navigation");
    })

    test("renders FooterNavigation component", () => {
        expect(nav).not.toBeNull();
    })
    test("renders Home link", () => {
        const homeLink = screen.queryByRole("link");
        expect(homeLink).not.toBeNull();
        expect(homeLink).toHaveTextContent("Home");
    })
    test("Home link renders with 'selected' active class", () => {
        const homeLink = screen.getByRole("link");
        expect(homeLink).toHaveClass("selected");
    })
    test("renders 'Contact Info' button", () => {
        const contactInfoBtn = screen.queryByRole("button");
        expect(contactInfoBtn).not.toBeNull();
        expect(contactInfoBtn).toHaveTextContent("Contact Info");
    })
    test("renders Divider component", () => {
        const separator = screen.queryByRole("separator");
        expect(separator).not.toBeNull();
    })
})