export function prodsSortByName(productes){
//exemple amb 3 formes de copiar un array abans de treballar amb ell
//    return productes.slice().sort((a,b) => a.name.localeCompare(b.name));
//    return [...productes].sort((a, b) => a.name.localeCompare(b.name));
return Array.from(productes).sort((a,b) => a.name.localeCompare(b.name));

}

export function prodsSortByPrice(productes){
    //return productes.slice().sort((a,b) => a.price - b.price )
    //return [...productes].sort((a, b) => a.price - b.price )
    return Array.from(productes).sort((a,b) => a.price - b.price )
}

export function prodsTotalPrice(productes){
        const total = productes.reduce((acumulador, producte) =>
        acumulador + producte.total(),
        0
    );

    return total.toFixed(2);
}

export function prodsWithLowUnits(productes,unitats){
    return productes.filter(producte => producte.units < unitats);
}

export function prodsList(productes){
  let resultado = 'Listado de productos:\n';

  productes.forEach(function(producto) {
    resultado += `- ${producto.name} - ${producto.price} € - ${producto.units} unidades\n`;
  });

  return resultado;
}