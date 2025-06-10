function ProductItem({ product, toggleCompare }) {
  const { title, price } = product;

  return (
    <li className="border p-4 rounded border-gray-600 bg-gray-800">
      <strong>{title}</strong> - ${price}
      <button
        className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
        onClick={() => toggleCompare(product)}
      >
        Comparar
      </button>
    </li>
  );
}

export default ProductItem;
