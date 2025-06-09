import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Stats from "./components/Stats";
import Chart from "./components/Chart";
import LinePriceChart from "./components/LineChart";
import PieStockChart from "./components/PieStockChart";

function exportToCSV(data) {
  const headers = ["ID", "Nombre", "Precio", "Categoría", "Stock", "Rating"];
  const rows = data.map(p => [p.id, p.title, p.price, p.category, p.stock, p.rating]);
  const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "productos.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Archivo CSV generado con éxito");
}

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [compareList, setCompareList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // podés cambiarlo si querés
  
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  const toggleCompare = (product) => {
    const exists = compareList.find((p) => p.id === product.id);
    if (exists) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else {
      setCompareList([...compareList, product]);
    }
  };

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => category === "all" ? true : p.category === category)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating-asc") return a.rating - b.rating;
      if (sort === "rating-desc") return b.rating - a.rating;
      return 0;
    });
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filtered.slice(startIndex, endIndex);


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Explorador de Productos</h1>
      <Stats products={filtered} />
      <Chart products={filtered} />

      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option value="all">Todas las categorías</option>
          {Array.from(new Set(products.map((p) => p.category))).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option value="">Sin orden</option>
          <option value="price-asc">Precio (menor a mayor)</option>
          <option value="price-desc">Precio (mayor a menor)</option>
          <option value="rating-asc">Rating (menor a mayor)</option>
          <option value="rating-desc">Rating (mayor a menor)</option>
        </select>
      </div>

      <LinePriceChart products={filtered} />
      <SearchBar search={search} onSearchChange={setSearch} />
      <ProductList products={paginatedProducts} onToggleCompare={toggleCompare} />
      <PieStockChart products={filtered} />
      <div className="flex justify-center mt-4 gap-4">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
  >
    Página Anterior
  </button>
  <span className="text-white font-semibold pt-2">Página {currentPage}</span>
  <button
    onClick={() =>
      setCurrentPage((prev) =>
        prev < Math.ceil(filtered.length / itemsPerPage) ? prev + 1 : prev
      )
    }
    disabled={currentPage >= Math.ceil(filtered.length / itemsPerPage)}
    className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
  >
    Página Siguiente
  </button>
</div>


      <button
        onClick={() => exportToCSV(filtered)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
      >
        Exportar a CSV
      </button>

      {compareList.length > 0 && (
        <div className="bg-white text-black p-4 rounded shadow mb-6">
          <h2 className="text-xl font-bold mb-2">Comparar productos</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {compareList.map((p) => (
              <li key={p.id} className="border p-4 rounded shadow">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p>Precio: ${p.price}</p>
                <p>Categoría: {p.category}</p>
                <p>Stock: {p.stock}</p>
                <p>Rating: {p.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
