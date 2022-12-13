import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("Reservation component correctly shows the reservation", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

test("Reservation components shows sold out message when no seats available", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);
  const soldOutMessage = await screen.findByRole("heading", {
    name: /sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", { name: /purchase/i });
  expect(purchaseButton).not.toBeInTheDocument();
});
