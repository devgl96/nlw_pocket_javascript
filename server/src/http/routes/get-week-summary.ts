import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekSummary } from "../../functions/get-week-summary";
import z from "zod";

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/summary",
    {
      schema: {
        querystring: z.object({
          timezoneOffset: z.coerce.number().default(0),
        }),
      },
    },
    async (request) => {
      const { timezoneOffset } = request.query;

      const { summary } = await getWeekSummary({ timezoneOffset });

      return { summary };
    }
  );
};
