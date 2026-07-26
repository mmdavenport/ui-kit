import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Alert from "./Alert";

describe("Alert", () => {
  it("renders message", () => {
    render(<Alert message="Hello" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Hello");
  });

  it("renders title when provided", () => {
    render(<Alert title="Note" message="Body" />);
    expect(screen.getByText("Note")).toBeInTheDocument();
  });

  it("calls onDismiss when dismiss is clicked", () => {
    const fn = vi.fn();
    render(<Alert message="Bye" onDismiss={fn} />);
    fireEvent.click(screen.getByLabelText("Dismiss"));
    expect(fn).toHaveBeenCalledOnce();
  });
});
