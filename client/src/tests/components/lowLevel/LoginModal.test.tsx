import { render, screen } from "@testing-library/react";

import { ContextWrapper } from "../../testWrappers";
import LoginModal from "../../../components/lowLevel/LoginModal";

describe("Test LoginModal component", () => {
    describe("render LoginModal with show prop set to false", () => {
        beforeEach(() => {
            render(
                <LoginModal
                    show={false}
                    onCloseClick={() => { }}
                />,
                { wrapper: ContextWrapper }
            )
        })

        test("renders LoginModal and it is not visible", () => {
            const modal = document.querySelector(".modal");
            expect(modal).not.toBeVisible();
        })
    })

    describe("renders LoginModal with show property set to false", () => {
        beforeEach(() => {
            render(
                <LoginModal
                    show={true}
                    onCloseClick={() => { }}
                />,
                { wrapper: ContextWrapper }
            );
        })

        test("renders LoginModal and it is visible", () => {
            const modal = document.querySelector(".modal");
            expect(modal).toBeVisible()
        })
        test("renders link 'Login with Google'", () => {
            const link = screen.getByRole("link", { name: /Login with Google$/ });
            expect(link).toHaveAttribute("href", "/auth/google")
        })
    })

})