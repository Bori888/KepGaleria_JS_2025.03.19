export  default class NagyKep {
    
    #cim
    #src
    #leiras
    
    constructor(cim,src,leiras, szuloElem) {//a sorend a diszeknél nem mindegy ugyan ugy kell legyen mint a tomb.jsben 
        this.#cim = cim;
        this.#src =src;
        this.#leiras = leiras;
        this.szuloElem = szuloElem;
        this.megjelenit();
      
    }

    megjelenit() {
        let html = `
                <div class="nagy">
                    <h2>${this.#cim}</h2>
                    <img src="${this.#src}" alt="">
                    <h3>${this.#leiras}</h3>
                </div>
        `
        this.szuloElem.innerHTML =html;
    }
}