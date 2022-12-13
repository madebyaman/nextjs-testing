import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("User Reservations page correctly shows the reservations", async () => {
  render(<UserReservations userId={123} />);
  const button = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(button).toBeInTheDocument();
});
