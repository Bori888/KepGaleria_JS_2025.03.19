/* hozd létre a Kep osztályt
adattagok:
kep, cim, szuloElem

tagfüggvények:

megjelenit
*/

export class Kep {
    
    #cim;
    #leiras
    #url
    constructor(kep, cim, szuloElem) {
        this.#cim = cim;
        this.#leiras = leiras;
        this.#url =url;
        this.szuloElem = szuloElem;
        this.kepMegjelenit();
      
    }

    kepMegjelenit() {
        let html = `
                <div class="nagy">
                    <h2>${this.#cim}</h2>
                    <img src="${this.#url}" alt="">
                    <h3>${this.#leiras}</h3>
                </div>
        `
        this.szuloElem.inserAdjecentHTML("beforeend",html)
    }
}