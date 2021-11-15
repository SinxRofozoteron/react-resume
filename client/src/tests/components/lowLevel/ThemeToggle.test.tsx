import { FC } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import { StyleManager } from "../../../components/lowLevel/StyleManager";
import { ThemeToggle } from "../../../components/lowLevel/ThemeToggle";
import { store as reduxStore } from "../../../app/store";

describe("Test ThemeToggle component", () => {
    let toggle: HTMLElement | null;
    let umountThemeToggle: () => void;
    let store: typeof reduxStore;

    beforeEach(() => {
        // Workaround for an issue when component state spills into next test
        jest.resetModules();
        store = require("../../../app/store").store;
        const ReduxThemeProvider: FC = ({ children }) => (
            <Provider store={store}>
                <StyleManager>
                    {children}
                </StyleManager>
            </Provider>
        )
        const { unmount } = render(<ThemeToggle />, { wrapper: ReduxThemeProvider });
        toggle = screen.queryByRole("switch");
        umountThemeToggle = unmount;
    });
    afterEach(() => {
        umountThemeToggle();
    })

    test("renders ThemeToggle component", () => {
        expect(toggle).not.toBeNull();
    });

    test("renders Notch subcomponet with correct margin-left", () => {
        const notch = toggle?.querySelector("div");
        // Initial Notch position should be on the left
        expect(notch).toHaveStyle("margin-left: 0.1rem");
    });

    test("notch moves on click", () => {
        const notch = toggle?.querySelector("div");
        userEvent.click(toggle!);
        expect(notch).toHaveStyle("margin-right: 0.1rem");
    });

    test("notch moves on keyDown space event", () => {
        const notch = toggle?.querySelector("div");
        fireEvent.focus(toggle!);
        fireEvent.keyDown(toggle!, { code: "Space" });
        expect(notch).toHaveStyle("margin-right: 0.1rem");
    });
})