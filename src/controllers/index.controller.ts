import { Response } from "express";
import { controller, httpGet, interfaces, response } from "inversify-express-utils";

@controller('/')
export class IndexController implements interfaces.Controller {
    @httpGet('')
    public getAll(@response() res: Response) {
        res.status(200).json({
            messagge: "Welcome tho te base api"
        })
    }
}