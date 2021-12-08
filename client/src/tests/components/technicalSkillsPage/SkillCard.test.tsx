import { render, screen } from "@testing-library/react";

import { ContextWrapper } from "../../testWrappers";
import SkillCard from "../../../components/technicalSkillsPage/SkillCard";

describe("Test SkillCard component", () => {
    const testData = {
        name: "Test SkillCard",
        link: "/test",
        description: "SkillCard Test description"
    }

    beforeEach(() => {
        render(<SkillCard {...testData} />, { wrapper: ContextWrapper });
    })

    test("renders SkillCard component", () => {
        const card = document.querySelector(".with-description");
        expect(card).not.toBeNull();
    })

    test("renders heading with expected text", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent(testData.name);
    })

    test("renders link with correct href", () => {
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", testData.link)
    })
})