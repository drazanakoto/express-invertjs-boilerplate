import './auth.controller';

import { ContainerModule, interfaces } from 'inversify';

import { TYPES } from './types';
import { AuthService } from './auth.service';

export const authContainerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<AuthService>(TYPES.AuthService).to(AuthService);
});
