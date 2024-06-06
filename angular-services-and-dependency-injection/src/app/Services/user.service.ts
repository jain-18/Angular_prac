import { User } from "../Models/User";

export class UserService{
    users : User[] = [
        new User('Steve Smith','Male','Monthly','Active'),
        new User('Shubham jain','Male','Yearly','Active'),
        new User('Nayan jain','Male','Daily','InActive')
    ] ;

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name : string , gender : string,subType : string , status :string){
        let user = new User(name,gender,subType,status)
        this.users.push(user);
    }
}