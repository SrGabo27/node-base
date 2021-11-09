import { BaseResponse } from "./base.response";

export class ErrorResponse extends BaseResponse {
    constructor(
        public error: any,
        message: string,
        statusCode: number
    ) {
        super(statusCode, message);
    }
}