import { rest } from "msw";

export const handlers = [
  rest.get("/api/random", async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    console.log(page);
    return res(ctx.status(200), ctx.json());
  }),
];
