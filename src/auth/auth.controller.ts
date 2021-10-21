import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, request, response } from "inversify-express-utils";
import { AuthService } from "./interfaces";
import { TYPES } from './types';

@controller("/auth")
export class AuthController {

    constructor(@inject(TYPES.AuthService) private authService: AuthService) { }

    @httpGet("/")
    public hello(@request() req: Request, @response() res: Response): any {
        const message = this.authService.login()
        res.send({ message })
    }
}