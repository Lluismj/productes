export default class Producte {
    constructor(name, category, units, price){
        this.name = name;
        this.category = category;
        this.units = units;
        this.price = price;
    }

    
    total() {
        return this.units * this.price;

    }
    toString(){
        return 'El preu de ' + this.name + ' és ' + this.price + ' * ' + this.units + ' = ' + this.total()
    }
    
    valueOf(){
        return this.price;
    }

}