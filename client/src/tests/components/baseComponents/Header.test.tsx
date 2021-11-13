import { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { StyleManager } from "../../../components/baseComponents/StyleManager";
import Header from "../../../components/baseComponents/Header";

describe("Test Header component", () => {
    const Wrapper: FC = ({ children }) => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <StyleManager>
                        {children}
                    </StyleManager>
                </Provider>
                <Switch>
                    <Route exact path="/">
                        <div id="test-id" />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
    let header: HTMLElement | null;

    beforeEach(() => {
        render(<Header />, { wrapper: Wrapper });
        header = screen.queryByRole("banner");
    });

    test("renders Header component", () => {
        expect(header).not.toBeNull();
    })

    test("renders Theme switch", () => {
        const themeSwitch = screen.queryByRole("switch");
        expect(themeSwitch).not.toBeNull();
    })

    test("renders HeaderNavigation component", () => {
        const nav = screen.queryByRole("navigation");
        expect(nav).not.toBeNull();
    })
})