import { FC } from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { AuthButton } from "../../../components/lowLevel/AuthButton";
import { store } from "../../../app/store";

describe("Test AuthButton component", () => {
  const ReduxProvider: FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  let authButton: HTMLElement | null;

  beforeEach(() => {
    render(<AuthButton />, { wrapper: ReduxProvider });
    authButton = screen.queryByRole("button");
  })

  test("renders AuthButton", () => {
    expect(authButton).not.toBeNull();
  })

  test("renders AuthButton with 'Login' text", () => {
    expect(authButton).toHaveTextContent("Login");
  })
})
