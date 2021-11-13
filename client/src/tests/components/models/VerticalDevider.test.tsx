import { render, screen } from "@testing-library/react";

import Divider from "../../../components/models/VerticalDivider";

describe("Test VerticalDivider model", () => {
    const expectedStyle = {
        width: "10px",
        height: "11px",
        color: "purple",
        horizontalMargin: "12px",
        verticalMargin: "auto"
    }
    beforeEach(() => {
        render(<Divider {...expectedStyle} />);
    });

    test("renders VerticalDivider", () => {
        const divider = screen.queryByRole("separator");
        expect(divider).not.toBeNull()
    });

    test("VerticalDivider has expected styles applied", () => {
        const divider = screen.queryByRole("separator");
        // Verify styles applied
        expect(divider).toHaveStyle(
            `border-left: ${expectedStyle.width} solid ${expectedStyle.color};\
            height: ${expectedStyle.height};\
            margin: ${expectedStyle.verticalMargin} ${expectedStyle.horizontalMargin}`
        )
    });
});