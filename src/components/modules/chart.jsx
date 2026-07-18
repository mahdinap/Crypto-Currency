import { useState } from "react"
import styles from "./chart.module.css"
import { convertData } from "../../helpers/convertData";
import { Legend, LineChart,CartesianGrid,Line,Tooltip,XAxis,YAxis, ResponsiveContainer } from "recharts";
import { formatDate } from "../../helpers/formatDate";

export default function Chart({setChart,chart}){
    const [type,setType]=useState("prices")
    console.log(convertData(chart,type));
    // convertData(chart,type)=
    console.log(chart);
    
    
    return(
        <>
        <div className={styles.container}>
            <span onClick={()=>setChart(null)} className={styles.cross}>X</span>
            <div className={styles.chart}>
            <div className={styles.name}>
                <img src={chart.coins.image} alt="img" />
                <p>{chart.coins.id}</p>
            </div>

                <div className={styles.graph}>
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                   
                    data={convertData(chart,type)}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke="#404042" />
                    <XAxis dataKey="time" stroke="#fff" tickFormatter={formatDate} hide/>

                    <YAxis  width="auto" stroke="#fff" domain={["auto","auto"]}/>

  <Tooltip
  formatter={(value) => `$${Math.round(value).toLocaleString("en-US")}`}
    labelFormatter={formatDate}
    contentStyle={{
        backgroundColor: "#222",
        color: "#fff",
        border: "1px solid #555",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }}
    labelStyle={{
        color: "#fff"
    }}
/>
                    <Legend />

                    <Line
                    type="monotone"
                    dataKey={type}
                    stroke="#3874ff"
                    strokeWidth="2px"/>
                    
                    </LineChart>
                    </ResponsiveContainer>
                    
                </div>
                <div className={styles.types}>
                <button className={type==="prices"? styles.selected:null} onClick={()=>setType("prices")}>Price</button>
                <button className={type==="market_caps"? styles.selected :null} onClick={()=>setType("market_caps")}>Market Cap</button>
                <button className={type==="total_volumes"?styles.selected:null} onClick={()=>setType("total_volumes")}>Volume</button>
                </div>
                <div className={styles.details}>
                    <div><p>Pricse:</p><span>${chart.coins.current_price}</span></div>
                    <div><p>ATh:</p><span>${chart.coins.ath}</span></div>
                    <div><p>Market Cap:</p><span>{chart.coins.market_cap}</span></div>
                </div>
            </div>
        </div>
        
        </>
    )
}