import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    activeRoute : ActivatedRoute = inject(ActivatedRoute);
    ngOnInit(){
        this.activeRoute.fragment.subscribe((data)=>{
            // console.log(data)
            this.JumpToSection(data)
        })
    }

    JumpToSection(section){
        document.getElementById(section).scrollIntoView({behavior: 'smooth'})
    }
}