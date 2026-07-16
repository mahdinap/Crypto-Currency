function formatDate(time){
    const date=new Date(time) 
    const month=date.toLocaleDateString("en-US",{month:"short"})
    const day=date.toLocaleDateString("en-US",{day:"2-digit"})
    const hour=date.toLocaleDateString("en-US",{hour:"2-digit"})
    return `${month} ${day} ${hour}`   
}
export {formatDate}