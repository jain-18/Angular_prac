import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";

export const CanActivate = ()=>{
    const authService = inject(AuthService);
    const router = inject(Router);
    if(authService.IsAuthenticated()){
        return true;
    }else{
        router.navigate(['/Login']);
        return false;
    }
}

export  const CanActivateChild = ()=> {
    return CanActivate();
}