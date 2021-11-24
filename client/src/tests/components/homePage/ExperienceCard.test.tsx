import { render, screen, getAllByRole } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import ExperienceCard, { ExperienceProps } from "../../../components/homePage/ExperienceCard";

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
    const Wrapper: React.FC = ({ children }) => {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }
    beforeEach(() => {
        render(<ExperienceCard {...experience} />, { wrapper: Wrapper })
    })

    test("renders ExperienceCard", () => {
        const listItems = screen.queryAllByRole("listitem");
        expect(listItems.length).toBeGreaterThan(0);
    });
    test("renders heading correctly", () => {
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toContain(experience.companyName);
        expect(heading.textContent).toContain(experience.location)
    })
    test("renders description correctly", () => {
        const descriptionList = screen.getByRole("list");
        const descriptionItems = getAllByRole(descriptionList, "listitem");
        expect(descriptionItems).toHaveLength(experience.description.length);
        expect(descriptionItems[0]).toHaveTextContent(experience.description[0]);
        expect(descriptionItems[1]).toHaveTextContent(experience.description[1]);
    })
})