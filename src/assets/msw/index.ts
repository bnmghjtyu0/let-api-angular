// if (typeof window === 'undefined') {
//   const { server } = require('./server');
//   server.listen({
//     onUnhandledRequest: 'warn',
//   });
// } else {
//   const { worker } = require('./browser');
//   worker.start();
// }

import { worker } from './browser';
worker.start();
