function Stats({ products }) {
    if (products.length === 0) return null;
  
    let max = products[0];
    let min = products[0];
    let totalPrecio = 0;
    let nombresLargos = 0;
  
    for (let p of products) {
      if (p.price > max.price) max = p;
      if (p.price < min.price) min = p;
      totalPrecio += p.price;
      if (p.title.length > 20) nombresLargos++;
    }
  
    const promedioPrecio = totalPrecio / products.length;
    const stockAlto = products.filter(p => p.stock > 50).length;
    const ratingAlto = products.filter(p => p.rating > 4.5).length;

    const precioPorCategoria = {};
    const masCaroPorCategoria = {};
    const masBaratoPorCategoria = {};
    const ratingPorCategoria = {};

    for (let p of products) {
    const cat = p.category;

 
    if (!precioPorCategoria[cat]) {
    precioPorCategoria[cat] = { total: 0, count: 0 };
    masCaroPorCategoria[cat] = p;
    masBaratoPorCategoria[cat] = p;
    ratingPorCategoria[cat] = { total: 0, count: 0 };
  }

    precioPorCategoria[cat].total += p.price;
    precioPorCategoria[cat].count++;

    if (p.price > masCaroPorCategoria[cat].price) masCaroPorCategoria[cat] = p;
    if (p.price < masBaratoPorCategoria[cat].price) masBaratoPorCategoria[cat] = p;

    ratingPorCategoria[cat].total += p.rating;
    ratingPorCategoria[cat].count++;
}


    const promedioPrecioPorCat = {};
    const promedioRatingPorCat = {};

    for (let cat in precioPorCategoria) {
    promedioPrecioPorCat[cat] = precioPorCategoria[cat].total / precioPorCategoria[cat].count;
    promedioRatingPorCat[cat] = ratingPorCategoria[cat].total / ratingPorCategoria[cat].count;
}

  
    return (
      <div className="bg-white text-gray-800 p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-2">Estadísticas</h2>
        <p>Total de productos: {products.length}</p>
        <p>Producto más caro: {max.title} (${max.price})</p>
        <p>Producto más barato: {min.title} (${min.price})</p>
        <p>Promedio de precios: ${promedioPrecio.toFixed(2)}</p>
        <p>Nombres largos: {nombresLargos}</p>
        <p>Con stock mayor a 50: {stockAlto}</p>
        <p>Con rating mayor a 4.5: {ratingAlto}</p>
        <h3 className="font-bold mt-4">Precio promedio por categoría:</h3>
    <ul className="list-disc list-inside">
    {Object.entries(promedioPrecioPorCat).map(([cat, val]) => (
    <li key={cat}>{cat}: ${val.toFixed(2)}</li>
  ))}
   </ul>

    <h3 className="font-bold mt-4">Producto más caro por categoría:</h3>
    <ul className="list-disc list-inside">
   {Object.entries(masCaroPorCategoria).map(([cat, prod]) => (
    <li key={cat}>{cat}: {prod.title} (${prod.price})</li>
  ))}
</ul>

    <h3 className="font-bold mt-4">Producto más barato por categoría:</h3>
    <ul className="list-disc list-inside">
    {Object.entries(masBaratoPorCategoria).map(([cat, prod]) => (
    <li key={cat}>{cat}: {prod.title} (${prod.price})</li>
  ))}
</ul>

    <h3 className="font-bold mt-4">Promedio de rating por categoría:</h3>
    <ul className="list-disc list-inside">
    {Object.entries(promedioRatingPorCat).map(([cat, val]) => (
    <li key={cat}>{cat}: {val.toFixed(2)}</li>
  ))}
</ul>

      </div>
    );
  }
  
  export default Stats;
  