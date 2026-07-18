import {formatDate} from "./formatDate"
const convertData = (data,type) => {
    const dataConverted= data[type].map((item)=>{
        return {
            time: item[0],
            [type]:item[1]
        }
    })
    
    return dataConverted
    
    
}
export {convertData}