/* hozd létre a Kep osztályt
adattagok:
kep, cim, szuloElem

tagfüggvények:

megjelenit
*/

export class Kep {
  #cim;
  #leiras;
  #url;
  constructor(kep, cim, szuloElem) {
    this.#cim = cim;
    this.#leiras = leiras;
    this.#url = url;
    this.szuloElem = szuloElem;
    this.kepMegjelenit();
    this.esemenykezelo();
  }
  esemenykezelo() {
    this.kepElem = document.querySelector(".kep:last-child");
    console.log(this.kepElem);
    this.kepElem.addEventListener("click", function () {
      console.log(this);
    });
  }

  kepMegjelenit() {
    let html = `
                <div class="kep">
                    <img src="${this.#url}" alt="">
                </div>
        `;
    this.szuloElem.inserAdjecentHTML("beforeend", html);
  }
}
