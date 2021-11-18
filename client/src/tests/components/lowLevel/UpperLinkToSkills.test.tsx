import { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import UpperLinkToSkills from "../../../components/lowLevel/UpperLinkToSkills";

describe("Test UpperLinkToSkills component", () => {
    const RouterWrapper: FC = ({ children }) => {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    {children}
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

    test("contains string 'Techical Skills'", () => {
        expect(link).toHaveTextContent(/Technical Skills/);
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