export class OvertimeDTO {
    title : string;
    content : string;

    constructor(data : any){
        this.title = data.title;
        this.content = data.content; 
    }
       
   
}