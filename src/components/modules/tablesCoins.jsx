import ChartDown from "../../assets/chart-down.svg"
import ChartUp from "../../assets/chart-up.svg"
import { RotatingLines } from "react-loader-spinner";
import styles from "./tableCoins.module.css"
import { getChart } from "../services/cryptoAPI";

export default function TablesCoins({coins,loader,cur,chart,setChart}){
   
    console.log(coins);
    
    return(
        <div className={styles.container}>
        {loader?<RotatingLines/>:
        <table className={styles.table}>
            <thead >
            <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price ({cur.toUpperCase()})</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th>Chart</th>
            </tr></thead>
            <tbody>
                
                    {coins.map((coin)=>(
                        <TableRow key={coin.id} coin={coin} setChart={setChart}/>
                    )       
                    )}
                
            </tbody>
            </table>}
        
        </div>
    )
}
const TableRow=({coin,setChart})=>{
     const displayStrings=(value)=>{
        if (value===null || value ===undefined || value ===""){
            return "-"
        }
        return value
    }
    const displayNumbersToLocaleString=(value)=>{
       return value !=null ? value.toLocaleString():"-"

    }   
    const displayNumbersToFixed=(value)=>{
        return value !=null ?value.toFixed(2):"-"
    }

    const showHandlerChart=async()=>{
        
            try {
                const res=await fetch(getChart(coin.id))
                const json=await res.json()
                console.log(json);
                setChart({...json,coins:coin})
            } catch (error) {
                setChart(null)
            }

        }
    

    return(
        <tr >
            <td><div className={styles.symbol}><img src={coin.image}/><span>{coin.symbol?coin.symbol.toUpperCase():"-"}</span></div></td>
            <td>{displayStrings(coin.name)}</td>
            <td>{displayNumbersToLocaleString(coin.current_price)}</td>
            <td className={coin.price_change_percentage_24h>0?styles.green:styles.red}>{displayNumbersToFixed(coin.price_change_percentage_24h)}%</td>
            <td>{displayNumbersToLocaleString(coin.total_volume) }</td>  
            <td className={styles.rang} onClick={showHandlerChart}><img src={coin.price_change_percentage_24h > 0 ? ChartUp :ChartDown}/></td>
            </tr>
    )
}