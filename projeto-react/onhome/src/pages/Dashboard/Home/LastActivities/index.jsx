import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LastActivities = () => {
    const data = [
        { 
            tempo: "7 dias", 
            relatorios: 19,
            maquinas: 12,
            usuarios: 4
        },
        { 
            tempo: "15 dias", 
            relatorios: 8,
            maquinas: 29,
            usuarios: 12
        },
        { 
            tempo: "30 dias", 
            relatorios: 25,
            maquinas: 34,
            usuarios: 8
        },
    ]
    
    return (
        <div>
            <LineChart
                width={500}
                height={150}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey={"tempo"}/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="relatorios" stroke="#36A2EB" />
                <Line type="monotone" dataKey="maquinas" stroke="#FF3784" />
                <Line type="monotone" dataKey="usuarios" stroke="#4ABDBD" />
            </LineChart>
        </div>
    )
}

export default LastActivities