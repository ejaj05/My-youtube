import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key='+API_KEY
export const ChannelDetails = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyASWT4CYfbGh3r3y13X3wt3jdWBApPDPzk'


export const fetchSearchResults = async (query)=>{
    try{
        const response = await axios.get(`/api${query}`)
        return response.data[1]
    }catch(error){
        console.error(error)
    }
    
}
