/* hozd létre a Kep osztályt
adattagok:
kep, cim, szuloElem

tagfüggvények:

megjelenit
*/

export class Kep {
    #kep;
    #cim;
    constructor(kep, cim, szuloElem) {
        this.#cim = cim;
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.kepMegjelenit();
    }

    kepMegjelenit() {
        let html = `
                <div class="kep">
                    <img src="${this.#kep}" alt="${this.#cim}">
                    <h3>${this.#cim}</h3>
                </div>
        `
        this.szuloElem.innerHTML += html;
    }
}