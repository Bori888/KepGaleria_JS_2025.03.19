import  Kepek  from "./Kepek.js";
import { OBJLISTA } from "./tomb.js";
import LeptetoKezelo from "./LeptetesKezelo.js";


let szuloElem = document.getElementsByClassName("galeria")[0];
console.log(szuloElem)
const KEPEK = new Kepek(OBJLISTA, szuloElem);

let nkep = document.getElementsByClassName("kiemelt")[0];
new LeptetoKezelo(OBJLISTA, nkep);
