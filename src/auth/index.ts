import './auth.controller';

import { ContainerModule, interfaces } from 'inversify';

import { AuthServiceImpl } from './auth.service';
import { AuthService } from './interfaces';
import { TYPES } from './types';

export const authContainerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<AuthService>(TYPES.AuthService).to(AuthServiceImpl);
});
