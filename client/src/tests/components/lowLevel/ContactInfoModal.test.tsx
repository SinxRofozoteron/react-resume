import { render, screen } from "@testing-library/react";

import { ContextWrapper } from "../../testWrappers";
import ContactInfoModal from "../../../components/lowLevel/ContactInfoModal";

describe("Test ContactInfoModal component", () => {
    describe("Test ContactInfoModal with 'show' property set to false", () => {
        beforeEach(() => {
            render(
                <ContactInfoModal show={false} onCloseClick={() => { }} />,
                { wrapper: ContextWrapper }
            );
        })

        test("does not render ContactInfo modal", () => {
            const modal = document.querySelector(".modal");
            expect(modal).not.toBeVisible();
        })
    })

    describe("Test ContactInfoModal with 'show' property set to true", () => {
        beforeEach(() => {
            render(
                <ContactInfoModal show={true} onCloseClick={() => { }} />,
                { wrapper: ContextWrapper }
            )
        });

        test("renders ContactInfoModal component and it is visible", () => {
            const modal = document.querySelector(".modal");
            expect(modal).not.toBeNull();
            expect(modal).toBeVisible();
        })
        test("renders phone link", () => {
            const link = screen.getByText(/\+1/);
            expect(link).toHaveAttribute("href", expect.stringMatching(/^tel:\+1/));
        })
        test("renders email link", () => {
            const link = screen.getByText(/\@gmail.com/);
            expect(link).toHaveAttribute("href", expect.stringMatching(/^mailto:.+\@gmail.com$/));
        })
        test("renders linkedIn link", () => {
            const link = screen.getByText(/LinkedIn/);
            expect(link).toHaveAttribute("href", expect.stringMatching(/linkedin/));
        })
        test("renders Close button", () => {
            const button = screen.getByRole("button");
            expect(button).toHaveTextContent("Close");
        })
    })
})