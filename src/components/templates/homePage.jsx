import { useEffect, useState } from "react"
import TablesCoins from "../modules/tablesCoins"

export default function HomePage(){
    const [coins,setCoins]=useState([])
    useEffect(()=>{
        const key="CG-ns88QYcsnZPypRv1cX61yUDu"
        fetch (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1&x_cg_demo_api_key=${key}`).then(res=>res.json()).then(data=>setCoins(data))
    
    },[])
    return(
        <>
        <TablesCoins coins={coins}/>
        </>
    )
}