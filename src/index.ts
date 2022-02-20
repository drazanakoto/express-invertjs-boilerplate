import * as http from 'http';
import { basename } from 'path';
import { createLogger } from './utils';

import { handler } from './app';

// create server
const port = process.env.SERVER_PORT || 5001;

const location = basename(__filename);
const logger = createLogger(location);

const httpServer = http.createServer(handler);
httpServer.listen(port, () => {
  logger.info(`Server run on port ${port}`, __filename);
});
