import { Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[betterhigh]'
})
export class betterhighdirective implements OnInit{
    constructor(private elementref: ElementRef ,private rend: Renderer2){
    }

    ngOnInit(){
        this.rend.setStyle(this.elementref.nativeElement , 'background-color' , 'blue');
    }

    @HostListener('mouseenter') mouseoverme(eventdata: Event){
        this.rend.setStyle(this.elementref.nativeElement , 'background-color' , 'blue');
    }

    @HostListener('mouseleave') mouseleaveme(eventdata: Event){
        this.rend.setStyle(this.elementref.nativeElement , 'background-color' , 'red');
    }
}