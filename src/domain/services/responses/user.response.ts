import { User } from "../../entities/user.entity";
import { BaseResponse } from "./base.response";

export class UserResponse extends BaseResponse {
    constructor(public user: User, message?: string, statusCode: number = 201) {
        super(statusCode, message)
    }
}