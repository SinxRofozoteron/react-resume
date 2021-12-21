import { render } from "@testing-library/react";

import ConditionalWrapper from "../../../components/models/ConditionalWrapper";

const wrapperId = "wrapper";
const childrenId = "children";

describe("Test ConditionalWrapper component", () => {
    describe("Wrapper is displayed", () => {
        beforeEach(() => {
            render(
                <ConditionalWrapper
                    condition={true}
                    wrapper={({ children }) => <div id={wrapperId}>{children}</div>}
                >
                    <div id={childrenId}></div>
                </ConditionalWrapper>
            );
        })

        test("render Wrapper", () => {
            const wrapper = document.getElementById(wrapperId);
            expect(wrapper).toBeInTheDocument();
        })
        test("render Children", () => {
            const children = document.getElementById(childrenId);
            expect(children).toBeInTheDocument();
        })

    })

    describe("Wrapper is not displayed", () => {
        beforeEach(() => {
            render(
                <ConditionalWrapper
                    condition={false}
                    wrapper={({ children }) => <div id={wrapperId}>{children}</div>}
                >
                    <div id={childrenId}></div>
                </ConditionalWrapper>
            )
        })

        test("Do not render wrapper", () => {
            const wrapper = document.getElementById(wrapperId);
            expect(wrapper).not.toBeInTheDocument();
        })
        test("render Children", () => {
            const children = document.getElementById(childrenId);
            expect(children).toBeInTheDocument();
        })
    })
})