import { useState } from "react"

const BASE_URL="https://api.coingecko.com/api/v3"
const API_KEY="CG-ns88QYcsnZPypRv1cX61yUDu"
const getCoinList=(page,cur)=>{
    return (`${BASE_URL}/coins/markets?vs_currency=${cur}&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`)
}
export {getCoinList}