import { KEPEK } from "./Kepek.js";
import { OBJLISTA } from "./tomb.js";
import LeptetoKezelo from "./LeptetesKezelo.js";


let szuloElem = document.getElementsByClassName(".galeria")[0];
const KEPEK = new KEPEK(OBJLISTA, szuloElem);

let nkep = document.getElementsByClassName(".kiemelt")[0];
new LeptetoKezelo(OBJLISTA, nkep);
