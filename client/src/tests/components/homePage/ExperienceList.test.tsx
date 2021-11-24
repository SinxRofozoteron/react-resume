import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import ExperienceList from "../../../components/homePage/ExperienceList";
import ExperienceCard from "../../../components/homePage/ExperienceCard";

describe("Test ExperienceList component", () => {
    const Wrapper: React.FC = ({ children }) => {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    };
    beforeEach(() => {
        render(<ExperienceList />, { wrapper: Wrapper });
    })

    test("renders heading with text 'Experience'", () => {
        const heading = screen.queryByRole("heading", { name: "Experience" });
        expect(heading).not.toBeNull();
    })

    test("renders list of experiences", () => {
        const list = document.getElementById("experience-list");
        expect(list).not.toBeNull();
    })

    test("renders 3 experiences", () => {
        const lis = document.querySelectorAll("#experience-list > li");
        expect(lis).toHaveLength(3);
    })
})