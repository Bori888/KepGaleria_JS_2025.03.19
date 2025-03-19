import { KEPEK } from "./Kepek.js";
import { Kep } from "./Kep.js";
import { Nagykep } from "./nagyKep.js";
import { OBJLISTA } from "./tomb.js";


const szuloElem = document.getElementsByClassName(".galeria")[0];
const nkep = document.getElementsByClassName(".kiemelt")[0];

const NagyKep =new NagyKep(
    OBJLISTA[0].cim,
    OBJLISTA[0].src,
    OBJLISTA[0].leiras,
    nkep


);

const KEPEK =new KEPEK(OBJLISTA,szuloElem)