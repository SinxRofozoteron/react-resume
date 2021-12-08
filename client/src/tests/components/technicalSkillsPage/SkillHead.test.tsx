import { render, screen } from "@testing-library/react";

import { ContextWrapper } from "../../testWrappers";
import SkillHead from "../../../components/technicalSkillsPage/SkillHead";

describe("Test SkillHead component", () => {
    const testName = "Test SkillHead"
    const testHref = "/test"
    describe("render as link", () => {
        beforeEach(() => {
            render(
                <SkillHead name={testName} asLink={true} link={testHref} />,
                { wrapper: ContextWrapper }
            );
        })

        test("renders passed skill name", () => {
            const link = screen.queryByText(testName);
            expect(link).not.toBeNull();
        })

        test("renders link with correct href", () => {
            const link = screen.getByRole("link");
            expect(link).toHaveAttribute("href", testHref);
        })
    })

    describe("render as div", () => {
        beforeEach(() => {
            render(
                <SkillHead name={testName} />,
                { wrapper: ContextWrapper })

        })

        test("renders div", () => {
            const element = document.evaluate(
                `//div/h3[text()='${testName}']`,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
            ).singleNodeValue
            expect(element).toBeInTheDocument();
        })
    })
})