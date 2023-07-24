import { rest } from "msw";
import page1 from "./page_1.json";

export const handlers = [
  rest.get("/api/random", async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    console.log(page);
    return res(ctx.status(200), ctx.json(page1));
  }),
];
