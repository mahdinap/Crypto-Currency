import { useState } from "react"
import styles from "./pagination.module.css"
export default function Pagination({page,setPage}){
    
   function prevHandler(){
    if(page <=1)return
    setPage((page)=>page-1)
   }
   function nextHandler(){
    if(page >=10)return
    setPage((page)=>page+1)
   }

    return(
        <div>
        <button onClick={prevHandler}>prev</button>
        <span style={{color:page===1?"red":"inherit"}}>1</span>
        <span style={{color:page===2?"red":"inherit"}}>2</span>
        {page>2 && page <=8 &&(
            <span >...<span style={{color:"red"}}>{page}</span>...</span>
        )}
        <span style={{color:page===9?"red":"inherit"}}>9</span>
        <span style={{color:page===10?"red":"inherit"}}>10</span>
        
        <button onClick={nextHandler} >next</button>
        </div>
    )
}