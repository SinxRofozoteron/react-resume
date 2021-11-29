import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ContextWrapper } from "../../testWrappers";
import ContactInfoBtn from "../../../components/lowLevel/ContactInfoButton";

describe("Test ContactInfoButton component", () => {
    let button: HTMLButtonElement | null;
    beforeEach(() => {
        render(<ContactInfoBtn />, { wrapper: ContextWrapper });
        button = screen.queryByRole("button") as HTMLButtonElement | null;
    })

    test("renders Contact Info button", () => {
        expect(button).not.toBeNull();
        expect(button).toHaveTextContent("Contact Info");
    })

    test("renders Contact Info button with closed modal", () => {
        const modal = document.querySelector(".modal");
        expect(modal).not.toBeVisible();
    })

    test("click on Contact Info button opens a modal", () => {
        userEvent.click(button!);
        const modal = document.querySelector(".modal");
        expect(modal).toBeVisible();
    })
})