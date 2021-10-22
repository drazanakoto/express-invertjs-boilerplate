import { injectable } from 'inversify';

import { AuthService } from './interfaces';

@injectable()
export class AuthServiceImpl implements AuthService {
  login(name: string): string {
    const value = name || 'world';
    return `Hello ${value}!`;
  }
}
