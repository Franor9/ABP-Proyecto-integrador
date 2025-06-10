import ProductItem from "./ProductItem";

function ProductList({ products, onToggleCompare }) {
  return (
    <ul className="grid gap-4">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} toggleCompare={onToggleCompare} />
      ))}
    </ul>
  );
}

export default ProductList;
