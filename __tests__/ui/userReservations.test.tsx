import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("User Reservations page correctly shows the reservations", async () => {
  render(<UserReservations userId={123} />);
  const button = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(button).toBeInTheDocument();
});

test("User reservations page doesn't shows reservations for user with no reservations", async () => {
  render(<UserReservations userId={0} />);
  const button = await screen.findByRole("button", {
    name: /purchase tickets/i,
  });
  expect(button).toBeInTheDocument();
  const heading = screen.queryByRole("heading", { name: /your tickers/i });
  expect(heading).not.toBeInTheDocument();
});
