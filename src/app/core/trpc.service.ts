import { Injectable } from '@angular/core';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// Importing the router type from the server file
import type { AppRouter } from '../../../../expresst/src/router/server';

@Injectable({
  providedIn: 'root'
})
export class TrpcService {
  client;

  constructor() {
    this.client = createTRPCProxyClient<AppRouter>({
      links: [
        httpBatchLink({
          url: 'http://localhost:4000/trpc',
          // fetch(url, options) {
          //   return fetch(url, {
          //     ...options,
          //     // credentials: 'include',
          //   });
          // },
        }),
      ],
    });
  }
}
