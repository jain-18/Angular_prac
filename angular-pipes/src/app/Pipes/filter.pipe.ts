import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
    name : 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(list : Student[], filterBy : string) {
        if(filterBy.toLocaleLowerCase() === 'all' || filterBy === '' || list.length === 0){
            return list;
        }else{
            return list.filter((std)=>{
                 return std.gender.toLocaleLowerCase() === filterBy.toLowerCase();
            })
        }
    }
}