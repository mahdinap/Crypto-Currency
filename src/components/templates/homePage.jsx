import { useEffect, useState } from "react"
import TablesCoins from "../modules/tablesCoins"
import { getCoinList } from "../services/cryptoAPI"

export default function HomePage(){
    const [coins,setCoins]=useState([])
    useEffect(()=>{
        const getData= async ()=>{
            const res=await fetch (getCoinList())
            const json=await res.json()
            setCoins(json)
        }
        getData()
    
    },[])
    return(
        <>
        <TablesCoins coins={coins}/>
        </>
    )
}