import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders label text", () => {
    render(<Badge label="Active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders each variant without error", () => {
    const variants = ["default", "success", "warning", "error", "info"] as const;
    for (const v of variants) {
      const { unmount } = render(<Badge label={v} variant={v} />);
      expect(screen.getByText(v)).toBeInTheDocument();
      unmount();
    }
  });
});
