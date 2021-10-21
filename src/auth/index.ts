import { ContainerModule, interfaces } from 'inversify'
import { AuthService } from './interfaces'
import { AuthServiceImpl } from './auth.service'
import { TYPES } from './types';
import './auth.controller'


export const authContainerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<AuthService>(TYPES.AuthService).to(AuthServiceImpl)
})
