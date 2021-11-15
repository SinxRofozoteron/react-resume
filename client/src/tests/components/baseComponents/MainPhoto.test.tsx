import { render, screen } from "@testing-library/react";

import MainPhoto from "../../../components/baseComponents/MainPhoto";

describe("Test MainPhoto component", () => {
    let image: HTMLElement | null;
    beforeEach(() => {
        render(<MainPhoto />);
        image = screen.queryByRole("img");
    })

    test("renders MainPhoto component", () => {
        expect(image).not.toBeNull();
    })
})