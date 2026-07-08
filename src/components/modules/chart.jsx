import styles from "./chart.module.css"
export default function Chart({setChart,Chart}){
    return(
        <>
        <div className={styles.container}>
            <span onClick={()=>setChart(null)} className={styles.cross}>X</span>
            <div className={styles.chart}></div>
        </div>
        
        </>
    )
}