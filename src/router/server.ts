import { initTRPC } from '@trpc/server';
import { z } from 'zod';
export const t = initTRPC.create();
export const publicProcedure = t.procedure;

export const appRouter = t.router({
  hi: publicProcedure.query(() => {
    return 'Hello world';
  }),
  getUser: publicProcedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: 'Bilbo' };
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      // use your ORM of choice
      return {
        data: req.input,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
