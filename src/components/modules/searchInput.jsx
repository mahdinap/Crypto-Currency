import { useEffect, useState } from "react"
import styles from "./searchInput.module.css"
import { searchList } from "../services/cryptoAPI"
import { RotatingLines } from "react-loader-spinner"
export default function Search({cur,setCur}){
    const [text,setText]=useState("")
    const [list,setList]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        if (!text) return
        
        const searchitem=async ()=>{
            const data=await fetch(searchList(text))
            const listJson=await data.json()

            if(listJson.coins) {
                setList(listJson.coins)
                setLoading(false)}
        }
    setLoading(true)
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
        <div>
            {loading ?<RotatingLines width={50} />:<ul>
                {list.map((item)=><li key={item.id}><img src={item.thumb} alt="logo" />{item.name}</li>)}
            </ul>}
            
        </div>
        </>
    )
}