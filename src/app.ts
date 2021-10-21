import 'reflect-metadata'
import * as express from 'express'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import { authContainerModule } from './auth'

const app = express()

/**
 * middleware
 */
app.use(express.json())

/**
 * inversify configuration
 */
const container = new Container()
container.load(authContainerModule)
const server = new InversifyExpressServer(container, null, { rootPath: '/api/v1' }, app)
export const handler = server.build()
