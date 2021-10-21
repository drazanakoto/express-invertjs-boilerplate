import { injectable } from 'inversify'
import { AuthService } from './interfaces'

@injectable()
export class AuthServiceImpl implements AuthService {
  login (): string {
    return 'auth'
  }
}
