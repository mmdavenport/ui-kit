import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RecordCard from "./RecordCard";

describe("RecordCard", () => {
  it("renders pending state with spinner", () => {
    const { container } = render(<RecordCard status="pending" />);
    expect(screen.getByText("Recording…")).toBeInTheDocument();
    expect(container.querySelector("button")).toBeNull();
  });

  it("renders confirmed state with title and badge", () => {
    render(<RecordCard status="confirmed" title="Draft Saved" />);
    expect(screen.getByText("ENTRY RECORDED")).toBeInTheDocument();
    expect(screen.getAllByText("Draft Saved")).toHaveLength(2);
    expect(screen.getByText("✓ CONFIRMED")).toBeInTheDocument();
  });

  it("renders failed state with error styling", () => {
    render(<RecordCard status="failed" />);
    expect(screen.getByText("Recording Failed")).toBeInTheDocument();
  });
});
