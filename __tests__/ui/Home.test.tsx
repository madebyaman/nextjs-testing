import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

test("Renders and show correct heading in Home", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: /welcome to popular concert venue/i,
  });
  expect(heading).toBeInTheDocument();
  const image = screen.getByRole("img", {
    name: /concert goer with hands in the shape of a heart/i,
  });
  expect(image).toBeInTheDocument();
});
