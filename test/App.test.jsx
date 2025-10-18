import { render, screen } from "@testing-library/react";
import App from "../src/App";
import userEvent from "@testing-library/user-event";

describe("App Component", () => {
  it("renders heading and initial UI", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /Vite \+ React/i });
    expect(heading).toBeInTheDocument();

    const text = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(text).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it("increment count when button is clicked", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is 0/i });
    await userEvent.click(button);

    expect(
      screen.getByRole("button", { name: /count is 1/i })
    ).toBeInTheDocument();
  });

  it("renders the edit instruction paragraph", () => {
    render(<App />);

    const paragraph = screen.getByText(
      (content, element) =>
        element.tagName.toLowerCase() === "p" &&
        content.includes("Edit") &&
        content.includes("save to test HMR")
    );

    expect(paragraph).toBeInTheDocument();
  });

  it("renders the Vite and React logos with correct links", () => {
    render(<App />);

    // Check Vite logo
    const viteLink = screen.getByRole("link", { name: /Vite logo/i });
    expect(viteLink).toHaveAttribute("href", "https://vite.dev");

    const viteImg = screen.getByAltText("Vite logo");
    expect(viteImg).toBeInTheDocument();
    expect(viteImg).toHaveClass("logo");

    // Check React logo
    const reactLink = screen.getByRole("link", { name: /React logo/i });
    expect(reactLink).toHaveAttribute("href", "https://react.dev");

    const reactImg = screen.getByAltText("React logo");
    expect(reactImg).toBeInTheDocument();
    expect(reactImg).toHaveClass("logo react");
  });
});
