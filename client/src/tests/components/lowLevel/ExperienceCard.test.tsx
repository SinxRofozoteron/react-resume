import { render, screen, getAllByRole } from "@testing-library/react";

import { ExperienceCard } from "../../../components/lowLevel/ExperienceCard";
import { ExperienceProps } from "../../../types/componentTypes";

describe("Test ExperienceCard component", () => {
    // Test data 
    const experience: ExperienceProps = {
        companyName: "Test Company",
        location: "New York",
        position: "SDET",
        dates: "2012-2016",
        description: ["TestDescription", "TestDescription2"],
        value: 1,
    }
    // Setup
    beforeEach(() => {
        render(<ExperienceCard {...experience} />)
    })

    test("renders ExperienceCard", () => {
        const listItems = screen.queryAllByRole("listitem");
        expect(listItems.length).toBeGreaterThan(0);
    });
    test("renders headings correctly", () => {
        const headings = screen.getAllByRole("heading");
        // Only two headings are expected
        expect(headings).toHaveLength(2);
        // First heading needs to contain comany name and location
        expect(headings[0]).toHaveTextContent(
            `${experience.companyName} | ${experience.location}`
        )
        // Second heading needs to contain position and dates
        expect(headings[1]).toHaveTextContent(
            `${experience.position} | ${experience.dates}`
        )
    })
    test("renders description correctly", () => {
        const descriptionList = screen.getByRole("list");
        const descriptionItems = getAllByRole(descriptionList, "listitem");
        expect(descriptionItems).toHaveLength(experience.description.length);
        expect(descriptionItems[0]).toHaveTextContent(experience.description[0]);
        expect(descriptionItems[1]).toHaveTextContent(experience.description[1]);
    })
})