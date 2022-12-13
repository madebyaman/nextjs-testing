import { rest } from "msw";

import { readFakeData } from "../fakeData";
import { fakeUserReservations } from "../fakeData/userReservations";

export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params;
    // showId = 0, seats available
    // showId = 1, no seats available
    return res(ctx.json({ show: fakeShows[Number(showId)] }));
  }),

  rest.get(
    "http://localhost:3000/api/users/:userId/reservations",
    async (req, res, ctx) => {
      const { userId } = req.params;
      if (Number(userId) === 0) {
        return res(ctx.json({ userReservations: [] }));
      }
      const userReservations = fakeUserReservations;
      return res(ctx.json({ userReservations }));
    }
  ),
];
