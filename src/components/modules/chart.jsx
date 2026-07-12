import { useState } from "react"
import styles from "./chart.module.css"
import { convertData } from "../../helpers/convertData";
import { Legend, LineChart,CartesianGrid,Line,Tooltip,XAxis,YAxis, ResponsiveContainer } from "recharts";


export default function Chart({setChart,chart}){
    const [type,setType]=useState("prices")
    console.log(convertData(chart,type));
    // convertData(chart,type)
    
    return(
        <>
        <div className={styles.container}>
            <span onClick={()=>setChart(null)} className={styles.cross}>X</span>
            <div className={styles.chart}>

                <div className={styles.graph}>
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                   
                    data={convertData(chart,type)}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke="#404042" />
                    <XAxis dataKey="time" stroke="#fff" />

                    <YAxis data={type} width="auto" stroke="#fff" domain={["auto","auto"]}/>

                    <Tooltip/>

                    <Legend/>

                    <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3874ff"
                    strokeWidth="2px"/>
                    
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
        
        </>
    )
}