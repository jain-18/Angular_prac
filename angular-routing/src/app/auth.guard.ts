import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";
import { Course } from "./Models/course";

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

export const resolve = () =>{
    const courseService : CourseService = inject(CourseService)
    return courseService.getAllcourses();
}