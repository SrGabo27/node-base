export abstract class BaseResponse {
    constructor(
        public statusCode: number,
        public message?: string
    ) {}
}