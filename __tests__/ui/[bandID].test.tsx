import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

// 1:16 BB
test("Band page renders the correct Band", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("Band page renders the error", () => {
  render(<BandComponent band={null} error="ERROR" />);
  const errorHeading = screen.getByRole("heading", { name: /error/i });
  expect(errorHeading).toBeInTheDocument();
});
