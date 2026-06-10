import ChartDown from "../../assets/chart-down.svg"
import ChartUp from "../../assets/chart-up.svg"
export default function TablesCoins({coins}){

    console.log(coins);
    
    return(
        <>
        <table>
            <thead>
            <tr>
                <th>Conin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volum</th>
                <th>Range</th>
            </tr></thead>
            <tbody>
                
                    {coins.map((coin)=>(
                        <tr key={coin.id}>
                        <td><div><img src={coin.image}/><span>{coin.symbol.toUpperCase()}</span></div></td>
                        <td>{coin.name}</td>
                        <td>{coin.current_price.toLocaleString()}</td>
                        <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                        <td>{coin.total_volume}</td>  
                        <td><img src={coin.price_change_percentage_24h > 0 ? ChartUp :ChartDown}/></td>
                        </tr>
                    )
                        
                        
                    )}
                
            </tbody>
            </table>
        </>
    )
}