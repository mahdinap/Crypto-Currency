export default function Search({cur,setCur}){
    return(
        <>
        <input type="text" />
        <select  value={cur} onChange={(e)=>setCur(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        </>
    )
}