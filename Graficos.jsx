

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Chart({ products }) {
  const data = products.map((p) => ({
    name: p.category,
    count: 1,
  }));

  
  const grouped = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.name]) acc[item.name] = { name: item.name, count: 0 };
      acc[item.name].count += 1;
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Productos por Categoría</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={grouped}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;







import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function LinePriceChart({ products }) {
 
  const data = products.slice(0, 10).map((p, index) => ({
    name: `Día ${index + 1}`,
    precio: p.price,
  }));

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">Evolución de Precios (Simulada)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="precio" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LinePriceChart;





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


