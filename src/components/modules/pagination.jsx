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
        <div className={styles.pagination}>
        <button onClick={prevHandler} className={page===1 ? styles.disable :null}>prev</button>
        <p className={page===1 ?styles.selected:null} onClick={()=>{setPage(1)}}>1</p>
        <p className={page===2 ?styles.selected:null} onClick={()=>{setPage(2)}}>2</p>
        {page>2 && page <=8 &&(
            <>
            
            <span>...</span>
            <p className={styles.selected}>{page}</p>
            </>
        )}
        <span>...</span>
        <p className={page===9 ?styles.selected:null} onClick={()=>{setPage(9)}}>9</p>
        <p className={page===10 ?styles.selected:null} onClick={()=>{setPage(10)}}>10</p>
        
        <button onClick={nextHandler} className={page===10 ?styles.disable:null} >next</button>
        </div>
    )
}