import axios from "axios"

export const fetchAll = async (url) => {
    const { data } = await axios.get(`https://api.tvmaze.com/search/shows${url}`)
    return data
}

export const fetchSingleData = async (id) => {
    const  {data}  = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    return data
}