// import { gql, request } from 'graphql-request'
import {gql, request} from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clvpxu18o05vr07wgcsi6pecf/master"
export const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default{
    getSlider
}