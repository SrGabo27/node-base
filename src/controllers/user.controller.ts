import { Response } from "express";
import { controller, httpGet, interfaces, response } from "inversify-express-utils";

@controller('/user')
export class UserController implements interfaces.Controller {
    @httpGet('')
    public getAll(@response() res: Response) {
        res.status(200).json({
            message: "User api"
        })
    }
} 