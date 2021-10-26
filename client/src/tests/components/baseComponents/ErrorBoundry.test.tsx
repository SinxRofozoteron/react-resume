import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../../../components/baseComponents/ErrorBoundry";

import ErrorBoundry from "../../../components/baseComponents/ErrorBoundry";

describe("Test ErrorBoundry component", () => {
    describe("Case: Children do not throw error", () => {
        beforeEach(() => {
            render(<ErrorBoundary><button>Click Me</button></ErrorBoundary>);
        })
        test("displays children", () => {
            const button = screen.queryByRole("button");
            expect(button).toBeTruthy();
        })
        test("does not display error message", () => {
            const errorMsg = screen.queryByRole("hedaing");
            expect(errorMsg).toBeNull();
        })
    })

    describe("Case: Children throw error", () => {
        // Component to sumulate error
        const ErrorComponent = () => { throw new Error("Test Error") };
        let consoleErrorSpy: jest.SpyInstance;
        beforeAll(() => {
            consoleErrorSpy = jest.spyOn(console, 'error');
            consoleErrorSpy.mockImplementation(() => { })
        })
        beforeEach(() => {
            render(
                <ErrorBoundary>
                    <ErrorComponent />
                    <button>Click Me</button>
                </ErrorBoundary>
            );
        })
        afterAll(() => {
            consoleErrorSpy.mockRestore()
        })

        test("displays error message", () => {
            const errorMsg = screen.getByRole("heading");
            expect(errorMsg.textContent).toContain("error")
        })

        test("does not display childern on error", () => {
            const button = screen.queryByRole("button");
            expect(button).toBeNull()
        })
    })

})