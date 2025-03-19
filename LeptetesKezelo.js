import NagyKep from "./nagyKep.js"

export default class LeptetoKezelo{
    #aktIndex;
    #lista = [];
    constructor(lista){
       
        this.#lista =lista
        this.#aktIndex =0;
        this.szuloElem =this.szuloElem;
        this.jobbGombElem =document.getElementsByClassName("jobb")[0]

        const NagyKep =new NagyKep(
            this.#lista[this.#aktIndex].cim,
                this.#lista[this.#aktIndex].src,
                this.#lista[this.#aktIndex].leiras,
                this.szuloElem
        );
        this.esemenykezelo()


    }
    esemenykezelo(){
        this.jobbGombElem.addEventListener("click",()=> {
            this.aktIndex++;
            this.aktIndex= this.aktIndex % this.#lista.lengh;//ezzel áltjuk vissza 0 ra 
        
            const NagyKep =new NagyKep(
                this.#lista[this.#aktIndex].cim,
                this.#lista[this.#aktIndex].src,
                this.#lista[this.#aktIndex].leiras,
                this.szuloElem
                
            );
        
            
        })

    }
}



