import { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import HeaderNav from "../../../components/lowLevel/HeaderNavigation";
import { store } from "../../../app/store";

describe("Test HeaderNavigation component", () => {
    const Wrapper: FC = ({ children }) => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    {children}
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
        render(<HeaderNav />, { wrapper: Wrapper });
        nav = screen.queryByRole("navigation");
    });

    test("renders HeaderNavigation component", () => {
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

    test("renders Login button", () => {
        const loginBtn = screen.queryByRole("button");
        expect(loginBtn).not.toBeNull();
        expect(loginBtn).toHaveTextContent("Login");
    })

    test("renders VerticalSeparator component", () => {
        const separator = screen.queryByRole("separator");
        expect(separator).not.toBeNull();
    })
})