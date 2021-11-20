import { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { StyleManager } from "../../../components/lowLevel/StyleManager";
import UpperLinkToSkills from "../../../components/homePage/UpperLinkToSkills";

describe("Test UpperLinkToSkills component", () => {
    const RouterWrapper: FC = ({ children }) => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <StyleManager>
                        {children}
                    </StyleManager>
                </Provider>
                <Switch>
                    <Route exact path="/technicalskills">
                        <div data-testid="test-id" />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }

    let link: HTMLLinkElement;
    beforeEach(() => {
        render(<UpperLinkToSkills />, { wrapper: RouterWrapper });
        link = screen.queryByRole("link") as HTMLLinkElement;
    })

    test("renders UpperLinkToSkills component", () => {
        expect(link).not.toBeNull();
    });

    test("has title 'Techical Skills page'", () => {
        expect(link.title).toBe("Technical Skills page");
    })
    test("contains SVG icon", () => {
        const icon = link.querySelector("svg");
        expect(icon).not.toBeNull();
    })

    test("follows /technicalskills route when clicked", () => {
        let testElement = screen.queryByTestId("test-id");
        if (testElement) {
            throw new Error(
                "test is at /technicalskills route in the beginning of the test."
            )
        }
        userEvent.click(link);
        testElement = screen.queryByTestId("test-id");
        expect(testElement).not.toBeNull()
    })
})