import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    users : User[] = [
        new User('Steve Smith','Male','Monthly','Active'),
        new User('Shubham jain','Male','Yearly','Active'),
        new User('Nayan jain','Male','Daily','InActive')
    ] ;

    GetAllUsers(){
        return this.users;
    }

    constructor(private logger : LoggerService){
        
    }

    CreateUser(name : string , gender : string,subType : string , status :string){
        let user = new User(name,gender,subType,status)
        this.users.push(user);
        this.logger.LogMessage(name,status);
    }
}