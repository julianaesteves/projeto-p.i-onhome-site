import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const MachinesOff = () => {
    const data = [
        { name: "Desligada", value: 2 },
        { name: "Em repouso", value: 1 },
    ]

    const chartColor = ["#c0c0c0", "#31639c"]

    return (    
        <div style={{ display: "flex", alignItems: "center", paddingBottom: "20px"}}>
            <PieChart width={200} height={250}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {data.map((item, index) => (
                        <Cell fill={chartColor[index]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default MachinesOff