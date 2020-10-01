import "regenerator-runtime/runtime";

import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  cacheMiddleware,
} from "react-relay-network-modern";

const middlewares = [
  cacheMiddleware({
    size: 100, // max 100 requests
    ttl: 900000, // 15 minutes
  }),
  urlMiddleware({
    url: (req) => process.env.GRAPHQL_SERVER,
  }),
  // example of the custom inline middleware
  (next) => async (req) => {
    console.log("RelayRequest", req);
    const res = await next(req);
    console.log("RelayResponse", res);

    return res;
  },
]; // array of middlewares
const options = { noThrow: true }; // optional advanced options
const network = new RelayNetworkLayer(middlewares, options); // as second arg you may pass advanced options for RRNL

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({ network, store });

export { environment };
