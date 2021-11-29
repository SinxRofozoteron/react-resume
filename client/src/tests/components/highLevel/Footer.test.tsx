import { render, screen } from "@testing-library/react";

import { ContextRouterWrapper } from "../../testWrappers";
import Footer from "../../../components/highLevel/Footer";

describe("Test Footer component", () => {
    let footer: HTMLElement | null;
    beforeEach(() => {
        render(<Footer />, { wrapper: ContextRouterWrapper });
        footer = screen.queryByRole("contentinfo");
    });

    test("renders Footer component", () => {
        expect(footer).not.toBeNull();
    })
})