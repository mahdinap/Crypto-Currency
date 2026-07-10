import { useState } from "react"
import styles from "./chart.module.css"
import { convertData } from "../../helpers/convertData";

export default function Chart({setChart,chart}){
    const [type,setType]=useState("prices")
    console.log(convertData(chart,type));
    
    
    return(
        <>
        <div className={styles.container}>
            <span onClick={()=>setChart(null)} className={styles.cross}>X</span>
            <div className={styles.chart}></div>
        </div>
        
        </>
    )
}