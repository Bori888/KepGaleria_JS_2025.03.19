import { KEPEK } from "./adat.js";
import { Kep } from "./Kep.js";

const GALERIAELEM = document.querySelectorAll(".galeria")[0];
const NAGYKEPELEM = document.querySelectorAll(".kiemelt")[0];

const MAGYKEP = new Kep(KEPEK[0].kep, KEPEK[0].cim, GALERIAELEM);

/* e helyett kellene egy Kepek osztály,
ami egy ciklussal végigmegy a listán */

const GALERIAKEPEK = new Kepek(KEPEK, GALERIAELEM);