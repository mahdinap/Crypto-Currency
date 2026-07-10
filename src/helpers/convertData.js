const convertData = (data,type) => {
    const dataConverted= data[type].map((item)=>{
        return {
            time:item[0],
            price:item[1]
        }
    })
    
    return dataConverted
    
    
}
export {convertData}