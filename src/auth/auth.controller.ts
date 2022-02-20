import { inject } from 'inversify';
import { controller, httpGet, requestParam } from 'inversify-express-utils';
import { TYPES } from './types';
import { AuthService } from './auth.service';

@controller('/auth')
export class AuthController {
  @inject(TYPES.AuthService)
  private readonly authService: AuthService;

  @httpGet('/')
  public hello(): any {
    const message = this.authService.login('');
    return { message };
  }

  @httpGet('/:name')
  public helloWithName(@requestParam('name') name: string): any {
    const message = this.authService.login(name);
    return { message };
  }
}
