import ChartDown from "../../assets/chart-down.svg"
import ChartUp from "../../assets/chart-up.svg"
import { RotatingLines } from "react-loader-spinner";
import styles from "./tableCoins.module.css"

export default function TablesCoins({coins,loader}){

    console.log(coins);
    
    return(
        <div className={styles.container}>
        {loader?<RotatingLines/>:
        <table className={styles.table}>
            <thead >
            <tr>
                <th>Conin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volum</th>
                <th>Chart</th>
            </tr></thead>
            <tbody>
                
                    {coins.map((coin)=>(
                        <TableRow coin={coin}/>
                    )       
                    )}
                
            </tbody>
            </table>}
        
        </div>
    )
}
const TableRow=({coin})=>{
    return(
        <tr key={coin.id}>
            <td><div className={styles.symbol}><img src={coin.image}/><span>{coin.symbol.toUpperCase()}</span></div></td>
            <td>{coin.name}</td>
            <td>{coin.current_price.toLocaleString()}</td>
            <td className={coin.price_change_percentage_24h>0?styles.green:styles.red}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>{coin.total_volume.toLocaleString()}</td>  
            <td><img src={coin.price_change_percentage_24h > 0 ? ChartUp :ChartDown}/></td>
            </tr>
    )
}