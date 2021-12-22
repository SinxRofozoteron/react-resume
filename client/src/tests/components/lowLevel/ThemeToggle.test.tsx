import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "jest-styled-components";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { StyleManager } from "../../../components/lowLevel/StyleManager";
import { store as reduxStore } from "../../../app/store";
import { ThemeToggle } from "../../../components/lowLevel/ThemeToggle";

describe("Test ThemeToggle component", () => {
    let toggle: HTMLElement | null;
    let umountThemeToggle: () => void;
    let store: typeof reduxStore;

    beforeEach(async () => {
        // Workaround for an issue when component state spills into next test
        jest.resetModules();
        store = require("../../../app/store").store;
        const ReduxThemeProvider: React.FC = ({ children }) => (
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

    test("renders Notch subcomponent with correct margin-right", () => {
        const notch = toggle?.querySelector("div");
        // Initial Notch position should be on the left
        expect(notch).toHaveStyleRule("margin-right", "0.1rem")
    });

    test("notch moves on click", () => {
        const notch = toggle?.querySelector("div");
        userEvent.click(toggle!);
        expect(notch).toHaveStyleRule("margin-left", "0.1rem");
    });

    test("notch moves on keyDown space event", async () => {
        const notch = toggle?.querySelector("div");
        fireEvent.focus(toggle!);
        fireEvent.keyDown(toggle!, { code: "Space" });
        await waitFor(() => expect(notch).toHaveStyleRule("margin-left", "0.1rem"));
    });
})