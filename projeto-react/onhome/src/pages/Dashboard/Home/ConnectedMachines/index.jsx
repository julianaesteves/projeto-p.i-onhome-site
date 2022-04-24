import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ConnectedMachines = () => {
    const data = [
        { name: 'Ideal', value: 7 },
        { name: 'Atenção', value: 1 },
        { name: 'Emergência', value: 1 },
    ];

    const chartColor = ["#c4342d", "#ffeb7a", "#a9d171"]

    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            <PieChart width={250} height={250}>
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
                <Legend/>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default ConnectedMachines