import { injectable } from 'inversify';

@injectable()
export class AuthService {
  login(name = 'world'): string {
    return `Hello ${name}!`;
  }
}
