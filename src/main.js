import Producte from "./clase_productes.class";
import Televisors from "./class_televisors.class";
import saludaMixin from "./saluda.mixins"

import {
    prodsSortByName,
    prodsSortByPrice,
    prodsTotalPrice,
    prodsWithLowUnits,
    prodsList
} from "./functions"

Object.assign(
    Producte.prototype,
    saludaMixin
);

const producte1 = new Producte(
    'Teclat',
    'Informatica',
    5,
    30
);

const producte2 = new Producte(
    'Monitor',
    'Informatica',
    2,
    180
);

const producte3 = new Producte(
    'Ratoli',
    'Informatica',
    8,
    5
);

const producte4 = new Producte(
    'Placa Base',
    'Informatica',
    3,
    135
);
const producte5 = new Producte(
    'SSD',
    'Informatica',
    21,
    200
);
const tele1 = new Televisors(
    'Tele',
    'Electronica',
    3,
    1250,
    42
)

const productes = [
    producte1,
    producte2,
    producte3,
    producte4,
    producte5
]

producte1.saluda();
console.log(producte1 < producte3)