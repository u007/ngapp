import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import dotenv from 'dotenv';
import { appRouter } from './router/server';

var cors = require('cors');
dotenv.config();

const port = process.env.PORT || '4000';

console.log(`Server is running on port ${port}`);
// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

const app = express();
app.use(
  '/trpc',
  cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }),
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

app.listen(+port);