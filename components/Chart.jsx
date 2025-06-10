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

  