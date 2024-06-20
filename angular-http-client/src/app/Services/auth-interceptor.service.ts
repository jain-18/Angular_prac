import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";



export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('Auth InterCeptor called');
        return next.handle(req);
    }

}