import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../Services/auth-service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

export const canActivate = (router : ActivatedRouteSnapshot,
     state : RouterStateSnapshot)=>{
    const authService = inject(AuthService);
    const routers = inject(Router)

     return authService.user.pipe(map((user)=>{
        const loggedIn = user ? true : false;

        if(loggedIn){
            return true;
        }
        else{
           return routers.createUrlTree(['/login']);
        }

    }))
}