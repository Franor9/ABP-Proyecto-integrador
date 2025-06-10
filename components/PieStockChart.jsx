import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PieStockChart({ products }) {
 
  const data = [
    { name: "Stock bajo (0-20)", value: products.filter(p => p.stock <= 20).length },
    { name: "Stock medio (21-50)", value: products.filter(p => p.stock > 20 && p.stock <= 50).length },
    { name: "Stock alto (51+)", value: products.filter(p => p.stock > 50).length },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className="my-6">
      <h3 className="text-lg font-bold mb-2">Proporción por Nivel de Stock</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default PieStockChart;
