import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, request, requestParam, response } from 'inversify-express-utils';

import { AuthService } from './interfaces';
import { TYPES } from './types';

@controller('/auth')
export class AuthController {
  @inject(TYPES.AuthService) private readonly authService: AuthService;

  @httpGet('/')
  public hello(@request() req: Request, @response() res: Response): void {
    const message = this.authService.login('');
    res.send({ message });
  }

  @httpGet('/:name')
  public helloWithName(@requestParam('name') name: string): any {
    const message = this.authService.login(name);
    return { message };
  }
}
