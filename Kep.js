
export default class Kep {
  #cim;
  #leiras;
  #src;
  #index;/*privalt adattag */
  constructor(index,leiras,src, cim, szuloElem) {
   
    this.#cim = cim;
    this.#index = index;
    this.#leiras = leiras;
    this.#src = src;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
  }
  esemenykezelo() {
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", ()=>  {//nyilt fv jele
      console.log(this.#index);
      const e =new CustomEvent("kivalaszt", {detail:this.#index});//uj eseményt  hozok létre
      window.dispatchEvent(e);
    });
  }

  megjelenit() {
    let html = `
                <div class="kep">
                    <img src="${this.#src}" alt="">
                </div>
        `;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
