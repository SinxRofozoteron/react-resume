import { render, screen } from "@testing-library/react";

import Summary from "../../../components/homePage/Summary";

describe("Test Summary component", () => {
    let section: HTMLElement | null;

    beforeEach(() => {
        render(<Summary />);
        section = document.querySelector("section");
    })

    test("renders Summary component", () => {
        expect(section).not.toBeNull();
    })
    test("has heading with text 'Summary'", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("Summary");
    })

})