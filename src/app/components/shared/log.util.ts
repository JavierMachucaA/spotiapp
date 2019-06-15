export class LogUtil {
    private clss : string ;
    private method : string ;
    constructor(private clsss : any =null, ){
        this.clss = clsss.name;
        
    }
    public print( value : any , method:string =null){
        let methodString : string = (method!=null) ? "."+method : "" ;
        let comb : string  = this.getClass()+methodString;
        let pre : string = ( comb!="")? "["+comb+"]" : "";
        
        console.log(pre,value);
    }

    public printError( value : any, execption: any = null , method:string =null){
        let methodString : string = (method!=null) ? "."+method : "" ;
        let comb : string  = this.getClass()+methodString;
        let pre : string = ( comb!="")? "["+comb+"]" : "";
        
        (execption!=null) ? console.error(pre,Object.assign(value,execption)) : console.error(pre,value);
    }

    private getClass(){
        return ((this.clss!=null) ? this.clss : "");
    }
    
}
