import NagyKep from "./nagyKep.js"

export default class LeptetoKezelo{
    #aktIndex;
    #lista = [];
    constructor(lista,szuloElem){
       
        this.#lista =lista
        this.#aktIndex =0;
        this.szuloElem =szuloElem;
        this.jobbGombElem =document.getElementsByClassName("jobb")[0]

        this.peldanyosit()
        this.esemenykezelo()
        this.kisKepKezeles()


    }
    kisKepKezeles(){
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail)
            this.#aktIndex=event.detail
            this.peldanyosit()
        })/*nyilt fv mert thist akarok használni */

    }
    esemenykezelo(){/*balra léptetés hf */
        this.jobbGombElem.addEventListener("click",()=> {
            this.aktIndex++;
            this.aktIndex= this.aktIndex % this.#lista.lengh;//ezzel áltjuk vissza 0 ra 
            this.peldanyosit()
            
        
            
        })

    }
    peldanyosit(){
        const nagykep =new NagyKep(
            this.#lista[this.#aktIndex].cim,
            this.#lista[this.#aktIndex].src,
            this.#lista[this.#aktIndex].leiras,
            this.szuloElem
            
        );

    }
}



