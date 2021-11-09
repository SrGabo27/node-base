import { CreateUserDto } from "../../resources/user/create-user.dto";
import { UpdateUserDto } from "../../resources/user/update-user.dto";
import { User } from "../entities/user.entity";
import { UserResponse } from "./responses/user.response";

export interface IUserService {
    getAll(): Promise<Array<User>>;
    getOne( id: number ): Promise<User>;
    getOneByEmail( email: string ): Promise<User>;
    create( user: CreateUserDto ): Promise<UserResponse>;
    update( id: number, user: UpdateUserDto ): Promise<UserResponse>;
    delete( id: number ): Promise<UserResponse>;
}