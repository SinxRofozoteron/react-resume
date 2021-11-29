import { render, screen } from "@testing-library/react";

import { ContextWrapper } from "../../testWrappers";
import { AuthButton } from "../../../components/lowLevel/AuthButton";

describe("Test AuthButton component", () => {
  let authButton: HTMLElement | null;

  beforeEach(() => {
    render(<AuthButton />, { wrapper: ContextWrapper });
    authButton = screen.queryByRole("button");
  })

  test("renders AuthButton", () => {
    expect(authButton).not.toBeNull();
  })

  test("renders AuthButton with 'Login' text", () => {
    expect(authButton).toHaveTextContent("Login");
  })
})
