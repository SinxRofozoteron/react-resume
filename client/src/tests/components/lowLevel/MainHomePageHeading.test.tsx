import { render, screen } from "@testing-library/react";

import MainHomePageHeading from "../../../components/lowLevel/MainHomePageHeading";

describe("Test MainHomePageHeading component", () => {
    let heading: HTMLElement | null;

    beforeEach(() => {
        render(<MainHomePageHeading />);
        heading = screen.queryByRole("heading");
    })

    test("renders MainHomePageHeading component", () => {
        expect(heading).not.toBeNull();
    });
    test("MainHomePageHeading contains full name and word Resume", () => {
        expect(heading?.textContent).toContain("Aliaksandr Burakou");
        expect(heading?.textContent).toContain("Resume");
    });
})