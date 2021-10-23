import { render, screen } from "@testing-library/react";

import { AuthButton } from "../../../components/baseComponents/AuthButton";

describe("Test AuthButton component", () => {
  test("Auth button has correct text conteent", () => {
    const buttonText = "Auth Button"
    render(<AuthButton>{buttonText}</AuthButton>)
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(buttonText);
  })
})
