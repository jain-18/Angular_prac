import { AbstractControl, FormControl } from "@angular/forms";

export const noSpaceAllowed = (control : FormControl) => {
    if(control.value != null && control.value.indexOf(' ') != -1){
        return {noSpaceAllowed : true};
    }
    return null;
}

export class CustomValidators{

    static noSpaceAllowed(control : FormControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed : true};
        }
        return null;
    }

    static checkUserName(control : AbstractControl): Promise<any>{
        return usernNameAllowed(control.value)
    }

}

function usernNameAllowed(username : string){
    const takenUSerNames = ['johnsmit','18jain','shubhjain'];

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(takenUSerNames.includes(username)){
                resolve({checkUsername: true});
            }
            else{
                resolve(null);
            }
        },1000)
    })
}