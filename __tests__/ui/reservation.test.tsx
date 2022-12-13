import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("Reservation component correctly shows the reservation", async () => {
  render(<Reservation showId={1231} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});
