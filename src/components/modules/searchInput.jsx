import { useEffect, useState } from "react"
import styles from "./searchInput.module.css"
import { searchList } from "../services/cryptoAPI"
export default function Search({cur,setCur}){
    const [text,setText]=useState("")
    const [list,setList]=useState()
    useEffect(()=>{
        if (!text) return
        
        const searchitem=async ()=>{
            const data=await fetch(searchList(text))
            const listJson=await data.json()
            if(listJson.coins) setList(listJson.coins)
        }
        searchitem()
        console.log(list);
    }
    ,[text])

    return(
        <>
        <input type="text" placeholder="Search" value={text} onChange={(e)=>setText(e.target.value)} />
        <select  value={cur} onChange={(e)=>setCur(e.target.value)} className={styles.select}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        </>
    )
}