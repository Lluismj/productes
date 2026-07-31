import Producte from "./clase_productes.class.js";

export default class Televisors extends Producte{
    constructor(name, category, units, price,grandaria){
        super(name, category, units, price,)
        this.grandaria = grandaria

    }

    toString(){
        return 'La grandaria de ' + this.name + ' és: ' + this.grandaria + ' i el seu preu és ' + this.price
    }
}