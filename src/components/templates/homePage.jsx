import { useEffect, useState } from "react"
import TablesCoins from "../modules/tablesCoins"
import { getCoinList} from "../services/cryptoAPI"
import Pagination from "../modules/pagination"
import Search from "../modules/searchInput"
import Chart from "../modules/chart"

export default function HomePage(){
    const [coins,setCoins]=useState([])
    const [isloaded,setLoaded]=useState(true)
    const[page,setPage]=useState(1)
    const[cur,setCur]=useState("usd")
    const [chart,setChart]=useState(null)

    useEffect(()=>{
        const getData= async ()=>{
            // setLoaded(true)
            const res=await fetch (getCoinList(page,cur))
            const json=await res.json()
            setCoins(json)
            setLoaded(false)
        }
        getData()
    
    },[page,cur])
    return(
        <>
        <Search cur={cur} setCur={setCur}/>
        <TablesCoins coins={coins} loader={isloaded} cur={cur} setChart={setChart} chart={chart}/>
        <Pagination page={page} setPage={setPage}/>
        {!!chart && <Chart setChart={setChart} chart={chart}/>}
        </>
    )
}