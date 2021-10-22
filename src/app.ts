import 'reflect-metadata';

import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import { authContainerModule } from './auth';

const app = express();

/**
 * middleware
 */
app.use(cors());
app.use(helmet());
app.use(express.json());

/**
 * inversify configuration
 */
const container = new Container();
container.load(authContainerModule);
const server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' }, app);
export const handler = server.build();
