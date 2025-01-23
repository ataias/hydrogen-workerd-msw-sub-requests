// We should first polyfill localStorage, as it is needed by the BroadcastChannel polyfill
import 'localstorage-polyfill';

import './broadcast-channel-polyfill';

import {setupWorker} from 'msw/browser';
import {handlers} from './handlers';

export const worker = setupWorker(...handlers);

worker.events.on('request:start', ({request}) => {
  console.log('-----> MSW intercepted', request.method, request.url);
});
